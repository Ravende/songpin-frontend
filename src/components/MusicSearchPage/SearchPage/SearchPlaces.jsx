import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PlaceComponent from "./PlaceComponent";
import { getPlaces } from "../../../services/api/place";

const SearchPlaces = ({ keyword, sortBy }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [isInitialSearch, setIsInitialSearch] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchPlaces = async () => {
      if (keyword) {
        try {
          setIsInitialSearch(false);
          setIsLoading(true);

          const placesData = await getPlaces({
            keyword,
            sortBy,
            page: 0,
            size: 20,
          });

          setSearchResults(Array.isArray(placesData) ? placesData : []);
          setIsLoading(false);
        } catch (e) {
          console.error(e);
          setSearchResults([]);
        } finally {
          setIsLoading(false);
        }
      }
    };
    fetchPlaces();
  }, [keyword, sortBy]);

  return (
    <PlacesList>
      {searchResults.length === 0 ? (
        isInitialSearch ? (
          <EmptySearchResult>
            <BeforeMessage>
              특정 장소에서 사람들이 들은 노래를 확인해보세요
            </BeforeMessage>
          </EmptySearchResult>
        ) : !isLoading ? (
          <EmptySearchResult>
            <EmptyMessage>검색 결과가 없습니다.</EmptyMessage>
          </EmptySearchResult>
        ) : null
      ) : (
        <>
          <Line />
          {searchResults.map(result => (
            <PlaceComponent
              key={result.placeId}
              placeName={result.placeName}
              placePinCount={result.placePinCount}
            />
          ))}
        </>
      )}
    </PlacesList>
  );
};

export default SearchPlaces;

const PlacesList = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmptySearchResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 263px);
`;

const BeforeMessage = styled.div`
  color: var(--gray, #bcbcbc);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
`;

const Line = styled.div`
  width: 480px;
  height: 1px;
  background: var(--gray, #bcbcbc);
`;

const EmptyMessage = styled(BeforeMessage)`
  color: var(--gray02, #747474);
`;
