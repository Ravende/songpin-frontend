import React from 'react';
import styled from 'styled-components';
import PlaylistSearchSideSection from '../../components/PlaylistPage/PlaylistSearchSideSection';

const PlaylistSearchPage = () => {
  return (
    <PlaylistSearchContainer>
      <PlaylistSearchSideSection />
    </PlaylistSearchContainer>
  );
};

export default PlaylistSearchPage;

const PlaylistSearchContainer = styled.div``;
