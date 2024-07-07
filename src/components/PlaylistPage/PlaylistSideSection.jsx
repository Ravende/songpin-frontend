import React from 'react';
import styled from 'styled-components';
import SearchBar from '../UsersPage/SearchBar';

const PlaylistSideSection = () => {
  return (
    <SideComponent>
      <SideBar></SideBar>
      <SideBox>
        <ContentBox>
          <SearchBar placeholder="플레이리스트 검색" />
        </ContentBox>
        {/* <h2>최근 생성된 플레이리스트</h2>
        <h2>팔로잉 중인 사람들의 플레이리스트</h2> */}
      </SideBox>
    </SideComponent>
  );
};

export default PlaylistSideSection;

const SideComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 608px;
`;

const SideBar = styled.div`
  width: 80px;
  border-right: 1px solid var(--gray, #bcbcbc);
`;

const SideBox = styled.div`
  width: 528px;
  border-right: 1px solid var(--gray, #bcbcbc);
  /* padding: 33px; */
`;

const ContentBox = styled.div`
  padding: 33px;
  padding-top: 40px;
`;
