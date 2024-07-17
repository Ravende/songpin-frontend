import React from 'react';
import styled from 'styled-components';
import PlaylistEditSideSection from '../../components/PlaylistPage/PlaylistEditSideSection';

const PlaylistEditPage = () => {
  return (
    <PlaylistEditContainer>
      <PlaylistEditSideSection />
    </PlaylistEditContainer>
  );
};

export default PlaylistEditPage;

const PlaylistEditContainer = styled.div``;
