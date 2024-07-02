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

const Content = styled.div`
  margin: 33px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;
