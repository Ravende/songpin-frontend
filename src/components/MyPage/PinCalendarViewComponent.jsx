import react, { useEffect } from "react";
import styled from "styled-components";
import albumImgExample from "../../assets/images/MyPage/album-eg.png";
import pinIcon from "../../assets/images/MyPage/vector-icon.svg";
import PinModalBox from "../common/PinModalBox";
import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { GenreList } from "../../constants/GenreList";
import { useNavigate } from "react-router-dom";

const PinCalendarViewComponent = ({
  title,
  artist,
  imgPath,
  listenedDate,
  placeName,
  genre,
}) => {
  const formattedCalendarDate = format(new Date(listenedDate), "yy.MM.dd", {
    locale: ko,
  });

  const navigate = useNavigate();
  const goMusicInfoPage = () => {
    navigate("/details-song");
  };
  const goLocation = () => {
    // 지도 위치 이동 코드 추가
  };

  const genreIcon = GenreList.find(it => it.EngName === genre)?.imgSrc;
  useEffect(() => {
    console.log(listenedDate);
  }, []);

  return (
    <PinBox>
      <AlbumImg src={imgPath} />
      <Content>
        <TitleSection>
          <SongInfo onClick={goMusicInfoPage}>
            <SongTitle>
              {genreIcon && <SongIcon src={genreIcon} />}
              <TitleText>{title}</TitleText>
            </SongTitle>
            <Singer>{artist}</Singer>
          </SongInfo>
          <PinModalBox top="48px" right="12px" padding="31px" />
        </TitleSection>
        <Info onClick={goLocation}>
          <CalendarDate>{formattedCalendarDate}</CalendarDate>
          <Place>{placeName}</Place>
          <PlaceText>에서</PlaceText>
        </Info>
      </Content>
    </PinBox>
  );
};

export default PinCalendarViewComponent;

const PinBox = styled.div`
  width: 436px;
  height: 74px;
  margin: 0 33px 12px 33px;
  padding: 11px 12px 15px 14px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--offwhite, #efefef);
  position: relative;
  display: flex;
  flex-direction: row;
  &:hover {
    background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.2) 100%
      ),
      var(--offwhite, #efefef);
  }
`;

const AlbumImg = styled.img`
  width: 78px;
  height: 78px;
  flex-shrink: 0;
  border-radius: 4px;
  padding-right: 25px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 4px;
  gap: 170px;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const SongTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

const SongIcon = styled.img`
  width: 20px;
  height: 20.005px;
  flex-shrink: 0;
`;

const TitleText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 252px;
`;

const Singer = styled.div`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  padding-top: 4px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  white-space: nowrap;
  cursor: pointer;
`;

const CalendarDate = styled.div`
  overflow: hidden;
  color: var(--gray02, #747474);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const Place = styled.div`
  color: var(--gray02, #747474);
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  max-width: 218px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  padding-left: 8px;
`;

const PlaceText = styled.div`
  color: var(--gray02, #747474);
  text-align: right;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  white-space: nowrap;
  flex-shrink: 0;
`;
