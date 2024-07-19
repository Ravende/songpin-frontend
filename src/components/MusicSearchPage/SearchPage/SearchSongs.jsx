import React from 'react';
import styled from 'styled-components';
import PinComponent from '../PinComponent';

const SearchSongs = () => {
  return (
    <SongsList>
      {/* <EmptySearchResult>
        <EmptyMessage>노래를 검색해 다른 사람들의 핀을 확인해보세요</EmptyMessage>
      </EmptySearchResult> */}
      <PinComponent />
      <PinComponent />
    </SongsList>
  );
};

export default SearchSongs;

const SongsList = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmptySearchResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 263px);
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
