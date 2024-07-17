import React from 'react';
import styled from 'styled-components';
import PlaceInfoContainer from '../../components/MusicSearchPage/PlaceInfoPage/PlaceInfoContainer';

const PlaceInfoPage = () => {
  return (
    <PlaceInfo>
      <PlaceInfoContainer />
    </PlaceInfo>
  );
};

export default PlaceInfoPage;

const PlaceInfo = styled.div``;
