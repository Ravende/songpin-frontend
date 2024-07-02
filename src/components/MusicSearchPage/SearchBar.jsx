import React from 'react';
import styled from 'styled-components';
import search from '../../assets/images/MusicSearchPage/search.svg';
import arrow_dropdown from '../../assets/images/MusicSearchPage/arrow_drop_down.svg';

const SearchBar = () => {
  return (
    <SearchBarComponent>
      <SearchBox>
        <Search>
          <SearchFilter>곡명</SearchFilter>
          <DropDown src={arrow_dropdown} alt="드롭다운" />
          <InputBox>사랑</InputBox>
        </Search>
        <SearchIcon src={search} alt="검색 아이콘" />
      </SearchBox>
      <Line />
    </SearchBarComponent>
  );
};

export default SearchBar;

const SearchBarComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 462px;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
`;

const SearchFilter = styled.div`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  padding-left: 4px;
`;

const DropDown = styled.img`
  width: 24px;
  height: 24px;
  padding-left: 4px;
`;

const InputBox = styled.div`
  padding-left: 8px;
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
  display: flex;
`;

const Line = styled.div`
  width: 462px;
  height: 1px;
  background: var(--light_black, #232323);
  margin-top: 11px;
`;
