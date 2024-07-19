import React from 'react';
import styled from 'styled-components';
import PlaceComponent from './PlaceComponent';

const SearchPlaces = () => {
  return (
    <PlacesList>
      {/* <EmptySearchResult>
        <EmptyMessage>특정 장소에서 사람들이 들은 노래를 확인해보세요</EmptyMessage>
      </EmptySearchResult> */}
      <Line />
      <PlaceComponent />
      <PlaceComponent />
      <PlaceComponent />
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

const EmptyMessage = styled.div`
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
