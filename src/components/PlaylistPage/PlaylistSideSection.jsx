import React from 'react';
import styled from 'styled-components';
import SearchBar from '../UsersPage/SearchBar';
import Playlist from './Playlist';

const PlaylistSideSection = () => {
  return (
    <SideComponent>
      <SideBar></SideBar>
      <SideBox>
        <ContentBox>
          <SearchBar placeholder="플레이리스트 검색" />
        </ContentBox>
        <TitleText>최근 생성된 플레이리스트</TitleText>
        <PlaylistFeed>
          <Playlist />
          <Playlist />
          <Playlist />
        </PlaylistFeed>
        <TitleText>팔로잉 중인 사람들의 플레이리스트</TitleText>
        <NoPlaylist>표시할 플레이리스트가 없습니다.</NoPlaylist>
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
  /* 스크롤바 왜 보이는지???
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  } */
`;

const ContentBox = styled.div`
  padding: 33px;
  padding-top: 40px;
  padding-bottom: 15px;
`;

const TitleText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  padding-left: 35px;
  margin-bottom: 15px;
`;

const PlaylistFeed = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px 20px 70px 20px;
`;

const NoPlaylist = styled.div`
  color: var(--gray02, #747474);
  width: 528px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  display: flex;
  justify-content: center;
  padding-top: 130px;
  padding-bottom: 130px;
`;
