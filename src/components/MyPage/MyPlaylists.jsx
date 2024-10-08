import React, { useEffect, useState } from "react";
import styled from "styled-components";
import musicLibraryIcon from "../../assets/images/MyPage/music-library.svg";
import Playlist from "./Playlist";
import CreatePlaylistModal from "../common/Modal/CreatePlaylistModal";
import { getMyPlaylist } from "../../services/api/myPage";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

const MyPlaylists = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [myPlaylistCount, setMyPlaylistCount] = useState();
  const [myPlaylist, setMyPlaylist] = useState([]);
  const openCreatePlaylist = () => {
    setIsOpen(prevState => !prevState);
  };
  const handlePlaylistClick = playlistId => {
    navigate(`/playlists/${playlistId}`);
  };
  // const { data, refetch } = useQuery({
  //   queryKey: ["getMyPlaylist"],
  //   queryFn: getMyPlaylist,
  // });

  // const myPlaylistCount = data.playlistCount;
  // const myPlaylist = data.playlistList;

  useEffect(() => {
    const getPlaylist = async () => {
      try {
        const res = await getMyPlaylist();
        console.log(res);
        if (res) {
          setMyPlaylistCount(res.playlistCount);
          setMyPlaylist(res.playlistList);
        }
      } catch (error) {
        console.log("데이터 불러오기에 실패했습니다.", error);
      }
    };
    getPlaylist();
  }, []);

  return (
    <PlaylistsContainer>
      <PlaylistOverview>
        <PlaylistTimes>
          <PlaylistIcon src={musicLibraryIcon} />
          <Num>{myPlaylistCount}</Num>
        </PlaylistTimes>
        <CreateNewPlaylist onClick={openCreatePlaylist}>
          새 플레이리스트 만들기
        </CreateNewPlaylist>
        {isOpen && <CreatePlaylistModal setModalCommon={openCreatePlaylist} />}
      </PlaylistOverview>
      <PlaylistSection>
        {myPlaylist &&
          myPlaylist.map(playlist => (
            <Playlist
              // key={it.playlistId}
              // playlistId={it.playlistId}
              // playlistName={it.playlistName}
              // creatorNickname={it.creatorNickname}
              // pinCount={it.pinCount}
              // updateDate={it.updatedDate}
              // bookmarkId={it.bookmarkId}
              key={playlist.playlistId}
              playlist={playlist}
              onClick={() => handlePlaylistClick(playlist.playlistId)}
            />
          ))}
      </PlaylistSection>
    </PlaylistsContainer>
  );
};

export default MyPlaylists;

const PlaylistsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 28px;
  margin-bottom: 30px;
`;

const PlaylistOverview = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 38px;
  margin-right: 40px;
`;

const PlaylistTimes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PlaylistIcon = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  padding-right: 8px;
`;

const Num = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const CreateNewPlaylist = styled.div`
  color: var(--light_black, #232323);
  text-align: right;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  padding-top: 3px;
`;

const PlaylistSection = styled.div`
  padding: 32px 40px 0 40px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 28px 28px;
`;
