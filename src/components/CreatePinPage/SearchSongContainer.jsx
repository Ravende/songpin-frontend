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
