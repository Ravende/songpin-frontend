import React, { useState } from "react";
import styled from "styled-components";
import SideSection from "./SideSection";
import PlainSearchBar from "./PlainSearchBar";
import PinComponent from "./PinComponent";
import { getExSpotify } from "../../services/api/spotify";

const SearchSongContainer = ({ onPinSelect }) => {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async query => {
    try {
      const data = await getExSpotify({ keyword: query });
      console.log(data);
      setSearchResults(data);
    } catch (error) {
      console.error("검색 에러: ", error);
    }
  };

  const handlePinClick = result => {
    const pinInfo = {
      title: result.title,
      singer: result.artist,
      image: result.imgPath,
    };
    onPinSelect(pinInfo);
  };

  return (
    <SideSection>
      <Content>
        <PlainSearchBar onSearch={handleSearch} />
        <SearchResult>
          {searchResults.map(result => (
            <PinComponent
              key={result.providerTrackCode}
              imgPath={result.imgPath}
              title={result.title}
              artist={result.artist}
              onPinClick={() => handlePinClick(result)}
            />
          ))}
          {searchResults.length === 0 && (
            <EmptySearchResult>
              <EmptyMessage>
                노래를 검색해 다른 사람들의 핀을 확인해보세요
              </EmptyMessage>
            </EmptySearchResult>
          )}
        </SearchResult>
      </Content>
    </SideSection>
  );
};

export default SearchSongContainer;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 40px;
`;

const SearchResult = styled.div``;

const EmptySearchResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 213px);
`;

const EmptyMessage = styled.div`
  color: var(--gray, #bcbcbc);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
`;
