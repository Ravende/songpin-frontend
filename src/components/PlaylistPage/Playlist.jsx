import React, { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import nobookmark from '../../assets/images/PlaylistPage/bookmark-no.svg';
import yesbookmark from '../../assets/images/PlaylistPage/bookmark-yes.svg';
import pinImage from '../../assets/images/MusicSearchPage/spark_122.svg';

const Playlist = (/* { playlist }*/ { onClick }) => {
  //   const { isBookmarked, coverImages } = playlist;
  const [isHovered, setIsHovered] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false); // 예시로 초기값을 false로 설정

  const toggleBookmark = () => {
    setIsBookmarked((prev) => !prev); // 상태 반전
  };
  return (
    <PlaylistContainer onClick={onClick}>
      <PlaylistBox>
        <BigBox>
          {/* 북마크 버튼 클릭하면 바뀌어야 함 */}
          <BookmarkBtn src={isBookmarked ? yesbookmark : nobookmark} alt="북마크 버튼" onClick={toggleBookmark} />
        </BigBox>
        <SmallBoxContainer>
          <SmallBox />
          <SmallBox />
          {/* <SmallBox imageUrl={coverImages[1]} />
          <SmallBox imageUrl={coverImages[2]} /> */}
        </SmallBoxContainer>
      </PlaylistBox>
      <PlaylistNameContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <PlaylistName isHovered={isHovered}>
          {/*{playlistName}*/}&nbsp;가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타
          &nbsp;가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타
        </PlaylistName>
        <FadeOut />
      </PlaylistNameContainer>
      <NameBox>
        <UserName>by 송송</UserName>
        <PinBox>
          <PinImg src={pinImage} alt="핀이미지" />
          <PinNum>53</PinNum>
        </PinBox>
      </NameBox>
      {/* 아직 등록된 노래가 없어요 */}
      <UpdatedDate>최근 업데이트: 20xx.xx.xx</UpdatedDate>
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
  /* gap: 1px; */
`;

const BigBox = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 8px 0px 0px 8px;
  border-right: 1px solid var(--f8f8f8, #fcfcfc);
  background: #5452ff;
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

// const SmallBox = styled.div`
//   width: 70px;
//   height: 70px;
//   border: 1px solid var(--f8f8f8, #fcfcfc);
//   background: url(${props => props.imageUrl}) no-repeat center center;
//   background-size: cover;
//   &:first-child {
//     border-radius: 0px 8px 0px 0px;
//   }
//   &:last-child {
//     border-radius: 0px 0px 8px 0px;
//   }
// `;

const SmallBox = styled.div`
  width: 70px;
  height: 70px;
  /* border: 1px solid var(--f8f8f8, #fcfcfc); */
  &:first-child {
    border-radius: 0px 8px 0px 0px;
    background: #00d2d2;
  }
  &:last-child {
    border-radius: 0px 0px 8px 0px;
    background: var(--offwhite, #efefef);
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
