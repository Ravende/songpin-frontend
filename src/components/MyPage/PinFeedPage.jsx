import React from 'react';
import styled from 'styled-components';
import Playlist from './Playlist';
import MyInfoTop from './MyInfoTop';

const PinFeedPage = () => {
  return (
    <SideComponent>
      <SideBar></SideBar>
      <SideBox>
        <Content>
          <MyInfoTop />
          <Playlist />
        </Content>
      </SideBox>
    </SideComponent>
  );
};

export default PinFeedPage;

const SideComponent = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

const SideBar = styled.div`
  width: 80px;
  border-right: 1px solid var(--gray, #bcbcbc);
`;

const SideBox = styled.div`
  width: 528px;
  border-right: 1px solid var(--gray, #bcbcbc);
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
`;
