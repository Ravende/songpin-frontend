import React from 'react';
import styled from 'styled-components';
import SideSection from '../../components/MusicSearchPage/SideSection';

const MusicSearchPage = () => {
  return (
    <MusicPageContainer>
      <SideSection />
    </MusicPageContainer>
  );
};

export default MusicSearchPage;

const MusicPageContainer = styled.div``;
