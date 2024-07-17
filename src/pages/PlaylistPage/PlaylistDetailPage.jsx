import React from 'react';
import styled from 'styled-components';
import PlaylistDetailSideSection from '../../components/PlaylistPage/PlaylistDetailSideSection';

const PlaylistDetailPage = () => {
  return (
    <PlaylistDetailContainer>
      <PlaylistDetailSideSection />
    </PlaylistDetailContainer>
  );
};

export default PlaylistDetailPage;

const PlaylistDetailContainer = styled.div``;
