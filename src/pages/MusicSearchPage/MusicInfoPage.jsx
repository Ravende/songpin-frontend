import React from 'react';
import styled from 'styled-components';
import MusicInfoContainer from '../../components/MusicSearchPage/MusicInfoContainer';

const MusicInfoPage = () => {
  return (
    <MusicInfo>
      <MusicInfoContainer />
    </MusicInfo>
  );
};

export default MusicInfoPage;

const MusicInfo = styled.div`
  overflow-y: auto;
  height: 100vh;
`;
