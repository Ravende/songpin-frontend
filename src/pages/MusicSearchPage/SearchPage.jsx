import React from 'react';
import styled from 'styled-components';
import SearchContainer from '../../components/MusicSearchPage/SearchContainer';
import SideSection from '../../components/MusicSearchPage/SideSection';

const SearchPage = () => {
  return (
    <SearchPins>
      <SearchContainer />
    </SearchPins>
  );
};

export default SearchPage;

const SearchPins = styled.div``;
