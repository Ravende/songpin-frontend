import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import SideSection from '../../components/common/SideSection';
import SearchBar from '../../components/UsersPage/SearchBar';
import Playlist from '../../components/PlaylistPage/Playlist';

const PlaylistPage = () => {
  const navigate = useNavigate();
  const [recentPlaylists, setRecentPlaylists] = useState([]);
  const [followingPlaylists, setFollowingPlaylists] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // API 호출 함수
    const fetchPlaylists = async () => {
      try {
        const response = await fetch('API_ENDPOINT', { //API 수정 필요
          headers: {
            Authorization: `Bearer YOUR_ACCESS_TOKEN`, // 실제 토큰으로 교체해야함 
          },
        });
        
        if (response.status === 401) {
          // 401 Unauthorized 에러 처리
          navigate('/login'); // 로그인 페이지로 리다이렉트
          return;
        }

        const data = await response.json();
        setRecentPlaylists(data.recentPlaylists);
        setFollowingPlaylists(data.followingPlaylists);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching playlists:', error);
        setLoading(false);
      }
    };

    fetchPlaylists();
  }, [navigate]);
  const handlePlaylistClick = (id) => {
    navigate(`/playlist/${id}`);
  };
  return (
    <SideSection>
    <ContentBox>
          <SearchBar placeholder="플레이리스트 이름을 검색" />
        </ContentBox>
        <TitleText>최근 생성된 플레이리스트</TitleText>
        {loading ? (
        <NoPlaylist>로딩 중...</NoPlaylist>
      ) : recentPlaylists.length > 0 ? (
        <PlaylistFeed>
          {recentPlaylists.map((playlist) => (
            <Playlist
              key={playlist.playlistId}
              playlist={playlist}
              onClick={() => handlePlaylistClick(playlist.playlistId)}
            />
          ))}
        </PlaylistFeed>
      ) : (
        <NoPlaylist>표시할 플레이리스트가 없습니다.</NoPlaylist>
      )}
        <TitleText>팔로잉 중인 사람들의 플레이리스트</TitleText>
        {loading ? (
        <NoPlaylist>로딩 중...</NoPlaylist>
      ) : followingPlaylists.length > 0 ? (
        <PlaylistFeed>
          {followingPlaylists.map((playlist) => (
            <Playlist
              key={playlist.playlistId}
              playlist={playlist}
              onClick={() => handlePlaylistClick(playlist.playlistId)}
            />
          ))}
        </PlaylistFeed>
      ) : (
        <NoPlaylist>표시할 플레이리스트가 없습니다.</NoPlaylist>
      )}
    </SideSection>
  );
};

export default PlaylistPage;

const PlaylistContainer = styled.div``;

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
  grid-template-columns: repeat(2, 1fr);
  /* grid-gap: 28px 28px; */
  padding: 0px 20px 70px 20px;
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
  padding-top: 260px;
  padding-bottom: 260px;
`;
