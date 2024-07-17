import React from 'react';
import styled from 'styled-components';
import PlaylistSideSection from '../../components/PlaylistPage/PlaylistSideSection';

const PlaylistPage = () => {
  return (
    <PlaylistContainer>
      <PlaylistSideSection />
    </PlaylistContainer>
  );
};

export default PlaylistPage;

const PlaylistContainer = styled.div``;
