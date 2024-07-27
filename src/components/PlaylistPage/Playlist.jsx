import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import nobookmark from '../../assets/images/PlaylistPage/bookmark-no.svg';
import yesbookmark from '../../assets/images/PlaylistPage/bookmark-yes.svg';
import pinImage from '../../assets/images/MusicSearchPage/spark_122.svg';

const Playlist = ({ playlist , onClick }) => {
  const { playlistName, creatorNickname, pinCount, updatedDate, imgPathList, bookmarkId } = playlist;
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(!!bookmarkId); // 예시로 초기값을 false로 설정

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev); // 상태 반전
  };
  return (
    <PlaylistContainer >
      <PlaylistBox>
        <BigBox imageUrl={imgPathList[0]} >
          <BookmarkBtn src={isBookmarked ? yesbookmark : nobookmark} alt="북마크 버튼" onClick={toggleBookmark} />
        </BigBox>
        <SmallBoxContainer>
          <SmallBox imageUrl={imgPathList[1]}/>
          <SmallBox imageUrl={imgPathList[2]}/>
        </SmallBoxContainer>
      </PlaylistBox>
      <PlaylistNameContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={onClick}>
        <PlaylistName isHovered={isHovered}>
        &nbsp;{playlistName}&nbsp;{playlistName}
        </PlaylistName>
        <FadeOut />
      </PlaylistNameContainer>
      <NameBox>
        <UserName>by {creatorNickname}</UserName>
        <PinBox>
          <PinImg src={pinImage} alt="핀이미지" />
          <PinNum>{pinCount}</PinNum>
        </PinBox>
      </NameBox>
      <UpdatedDate>최근 업데이트: {updatedDate}</UpdatedDate>
    </PlaylistContainer>
  );
};

export default Playlist;

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  cursor: pointer;
`;
const PlaylistBox = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 12px;
`;

const BigBox = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 8px 0px 0px 8px;
  border-right: 1px solid var(--f8f8f8, #fcfcfc);
  background: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl}) no-repeat center center` : '#E7E7E7')};
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const SmallBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 140px;
  gap: 1px;
`;

const SmallBox = styled.div`
  width: 70px;
  height: 70px;
  background: ${({ imageUrl }) => (imageUrl ? `url(${imageUrl}) no-repeat center center` : '#E7E7E7')};
  background-size: cover;
  &:first-child {
    border-radius: 0px 8px 0px 0px;
  }
  &:last-child {
    border-radius: 0px 0px 8px 0px;
  }
`;

const BookmarkBtn = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  padding: 10px;
  cursor: pointer;
`;

const PlaylistNameContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 210px;
  overflow: hidden;
`;

const scrollText = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const PlaylistName = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding: 6px 6px 6px 2px;
  white-space: nowrap;
  animation: ${(props) => (props.isHovered ? scrollText : 'none')} 9s linear infinite;
`;

const FadeOut = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  width: 40px;
  background: linear-gradient(to left, white, rgba(255, 255, 255, 0));
`;

const NameBox = styled.div`
  width: 210px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const UserName = styled.div`
  color: var(--gray03, #5f5f5f);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  margin-left: 8px;
`;

const PinBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PinImg = styled.img`
  width: 15px;
  height: 15px;
  opacity: 0.8;
`;

const PinNum = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  padding: 5px;
`;

const UpdatedDate = styled.div`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  height: 24px;
  padding: 8px;
`;
