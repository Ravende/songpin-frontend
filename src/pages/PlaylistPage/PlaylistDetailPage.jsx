import React, { useState,useEffect } from "react";
import styled from "styled-components";
import { useNavigate,useParams } from "react-router-dom";
import { getPlaylistDetail } from "../../services/api/stats";
import backArrow from "../../assets/images/UsersPage/arrow_back_ios.svg";
import nobookmark from "../../assets/images/PlaylistPage/nobookmark_black.svg";
import yesbookmark from "../../assets/images/PlaylistPage/yesbookmark_black.svg";
import pinImage from "../../assets/images/MusicSearchPage/spark_122.svg";
import shareImg from "../../assets/images/PlaylistPage/share.svg";
import moreButton from "../../assets/images/PlaylistPage/more_vert.svg";
import PinComponent from "../../components/PlaylistPage/PinComponent";
import SideSection from "../../components/common/SideSection";
import BookmarkToggle from "../../components/PlaylistPage/BookmarkToggle";

const options = ["플레이리스트 수정", "플레이리스트 삭제"];

const PlaylistDetailPage = () => {
  const { playlistId } = useParams();
  const navigate = useNavigate();
  const [playlistData, setPlaylistData] = useState(null);
  // const [isBookmarked, setIsBookmarked] = useState(false); // 예시로 초기값을 false로 설정
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchPlaylistDetail = async () => {
      try {
        const data = await getPlaylistDetail(playlistId);
        setPlaylistData(data);
        // setIsBookmarked(!!data.bookmarkId);
      } catch (error) {
        console.error("Error fetching playlist detail:", error);
      }
    };

    fetchPlaylistDetail();
  }, [playlistId]);

  const handlePopup = () => {
    setIsOpen(!isOpen);
  };
  // const toggleBookmark = () => {
  //   setIsBookmarked(prev => !prev); // 상태 반전
  // };
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <SideSection>
      <DetailContainer>
        <ContentBox>
          <BackBtn src={backArrow} onClick={handleBackClick} />
          {/* 나의 플레이리스트일때만 MoreBtn 보이도록 함  */}
          {playlistData.isMine && (
            <MoreBtn src={moreButton} onClick={handlePopup} />
          )}
          {isOpen && (
            <MorePopup>
              {options.map(option => (
                <ListItem>{option}</ListItem>
              ))}
            </MorePopup>
          )}
        </ContentBox>
        <PlaylistBox>
          <BigBox imageUrl={playlistData.imgPathList[0]}/>
          <SmallBoxContainer>
          <SmallBox imageUrl={playlistData.imgPathList[1]} />
            <SmallBox imageUrl={playlistData.imgPathList[2]} />
          </SmallBoxContainer>
        </PlaylistBox>
        <PlaylistName>
        {playlistData.playlistName}
          {/* 가나다라마바사아자차카타파하가나다라마바사아자차카타파하가나다라마바사아자차카타 */}
        </PlaylistName>
        <NameBox>
          <UserName>by {playlistData.creatorNickname}</UserName>
          <IconBox>
            {/* <BookmarkBtn
              src={isBookmarked ? yesbookmark : nobookmark}
              alt="북마크 버튼"
              onClick={toggleBookmark}
            /> */}
            <BookmarkToggle playlistId={playlistData.playlistId} initialBookmarkId={playlistData.bookmarkId} color="black"/>
            <ShareBtn src={shareImg} alt="공유 버튼" />
          </IconBox>
        </NameBox>
        <InfoBox>
          
          <PinBox>
            <PinImg src={pinImage} alt="핀이미지" />
            <PinNum>{playlistData.pinCount}</PinNum>
          </PinBox>
          {/* 아직 등록된 노래가 없어요 */}
          <UpdatedDate>최근 업데이트: {playlistData.updatedDate}</UpdatedDate>
        </InfoBox>
        <PinContainer>
        {playlistData.pinList.map(pin => (
            <PinComponent key={pin.playlistPinId} pin={pin} selectable={false} buttonVisible={true} />
          ))}
          <PinComponent selectable={false} buttonVisible={true} />
          <PinComponent selectable={false} buttonVisible={true} />
          <PinComponent selectable={false} buttonVisible={true} />
          <PinComponent selectable={false} buttonVisible={true} />
          <PinComponent selectable={false} buttonVisible={true} />
          <PinComponent selectable={false} buttonVisible={true} />
          <PinComponent selectable={false} buttonVisible={true} />
          <PinComponent selectable={false} buttonVisible={true} />
          <PinComponent selectable={false} buttonVisible={true} />
          <PinComponent selectable={false} buttonVisible={true} />
        </PinContainer>
      </DetailContainer>
    </SideSection>
  );
};

export default PlaylistDetailPage;

const DetailContainer = styled.div`
  padding: 34px;
  padding-top: 40px;
  justify-content: center;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;

  /* padding-left: 33px; */
  /* padding-right: 33px; */
  /* padding-top: 38px; */

  align-items: center;
`;

const BackBtn = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  padding-top: 5px;
  cursor: pointer;
`;

const MoreBtn = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
`;

const PlaylistBox = styled.div`
  display: flex;
  overflow: hidden;
  margin-bottom: 8px;
  margin-top: 31px;
`;

const BigBox = styled.div`
  width: 309px;
  height: 309px;
  border-radius: 18px 0px 0px 18px;
  /* background: #5452ff; */
  background: url(${props => props.imageUrl || '#E7E7E7'}) no-repeat center center;
  background-size: cover;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
`;

const SmallBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const SmallBox = styled.div`
  width: 155px;
  background: url(${props => props.imageUrl || '#E7E7E7'}) no-repeat center center;
  background-size: cover;

  &:first-child {
    height: 154px;
    border-radius: 0px 18px 0px 0px;
    /* background: #00d2d2; */
  }
  &:last-child {
    height: 155px;
    border-radius: 0px 0px 18px 0px;
    /* background: rgba(255, 88, 138, 0.94); */
  }
`;

const PlaylistName = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  width: 464px;
  padding-left: 3px;
  margin-top: 19px;
`;

const NameBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: 18px;
`;
const UserName = styled.div`
  color: var(--gray03, #5f5f5f);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const BookmarkBtn = styled.img`
  width: 19px;
  height: 25px;
  /* padding: 10px; */
  cursor: pointer;
`;

const ShareBtn = styled.img`
  width: 30px;
  height: 30px;
  padding-left: 13px;
  flex-shrink: 0;
  cursor: pointer;
`;

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
`;
const PinBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PinImg = styled.img`
  width: 20px;
  height: 20px;
`;

const PinNum = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-left: 5px;
`;

const UpdatedDate = styled.div`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const MorePopup = styled.div`
  display: flex;
  /* width: 182px; */
  padding: 18px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--gray02, #747474);
  background: var(--f8f8f8, #fcfcfc);
  z-index: 1000;
  position: absolute;
  /* top: 100%; */
  /* right: -163px; */
  top: 85px;
  left: 540px;
  z-index: 1000;
  /* top: 100%; */
`;

const ListItem = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;

const PinContainer = styled.div`
  margin-top: 32px;
  /* margin-bottom: 32px; */
`;
