import React from 'react';
import styled from 'styled-components';
import PlaceComponent from './PlaceComponent';

const SearchPlaces = () => {
  return (
    <PlacesList>
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

const Line = styled.div`
  width: 480px;
  height: 1px;
  background: var(--gray, #bcbcbc);
`;
