import React, { useState } from 'react';
import styled from 'styled-components';
import albumImage from '../../assets/images/UsersPage/Rectangle 205.svg';
import mapIconBallad from '../../assets/images/MusicSearchPage/flower.svg';
import mapIconBlack from '../../assets/images/MusicSearchPage/flower_black.svg';
import mapIconGray from '../../assets/images/MusicSearchPage/flower_gray.svg';
import moreMenu from '../../assets/images/UsersPage/more_vert.svg';
import lock from '../../assets/images/UsersPage/lock.svg';
const PinComponent = () => {
  const [image, setImage] = useState(mapIconBlack);
  const [isTruncated, setIsTruncated] = useState(true);
  const text =
  '사랑하긴 했었나요 스쳐가는 인연이었나요 짧지 않은 우리 함께했던 시간들이 자꾸 내 마음을 가둬두네 누가 내 가슴에다 불을 질렀나 누가 내 심장에다 못을 박았나';
  const maxLength = 59;
  const showMoreBtn = text.length > maxLength;
  const displayText = showMoreBtn && isTruncated ? text.substring(0, 55) : text;

  const toggleTruncation = () => {
    setIsTruncated(!isTruncated);
  };

  return (
    <PinBox onMouseEnter={() => setImage(mapIconBallad)} onMouseLeave={() => setImage(mapIconBlack)}>
      <TextBox>
        <SongBox>
          <PinImg src={albumImage} alt="앨범 이미지" />
          <TitleBox>
            <PinTitle>
              <MapIcon src={image} alt="지도 아이콘" />
              <TitleText>
                사랑하긴 했었나요 스쳐가는 인연이었나요 짧지않은 우리 함께했던 시간들이 자꾸 내 마음을 가둬두네
              </TitleText>
            </PinTitle>
            <PinSinger>잔나비</PinSinger>
          </TitleBox>
          <MoreIcon src={moreMenu} alt="더보기 아이콘" />
        </SongBox>
        <ContentBox>
          <LyricText  onClick={isTruncated ? () => {} : toggleTruncation} isTruncated={isTruncated}>
            <LockImg src={lock} alt="나만보기 아이콘" />
            {displayText}
            {showMoreBtn && isTruncated && <MoreBtn onClick={toggleTruncation}> ...더보기</MoreBtn>}
          </LyricText>
          <InfoBox>
            <InfoText>2024.04.04</InfoText>
            <PlaceText>이화여대 학문관</PlaceText>
            <InfoText>에서</InfoText>
          </InfoBox>
        </ContentBox>
      </TextBox>
    </PinBox>
  );
};

export default PinComponent;

const PinBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 462px;
  min-height: 174px;
  flex-shrink: 0;
  border-radius: 8px;

  background: var(--offwhite, #efefef);
  cursor: pointer;
  margin-bottom: 12px;
`;

const PinImg = styled.img`
  width: 60px;
  height: 60px;
  /* padding-left: 12px; */
  border-radius: 4px;
`;

const SongBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
`;

const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 16px 14px;
  width: 100%;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 11px;
  margin-top: 4px;
  width: 334px;
  height: 52px;
  flex-shrink: 0;
  justify-content: space-around;
`;
const PinTitle = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
`;

const MapIcon = styled.img`
  width: 20px;
  height: 22.252px;
  padding-right: 8px;
  /* &:hover {
    fill: #1ddfec;
  } */
`;

const TitleText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 306px;
  height: 24px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const PinSinger = styled.div`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  height: 24px;
  margin-top: 4px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const MoreIcon = styled.img`
  width: 24px;
  height: 24px;
  padding-right: 12px;
`;

const LockImg = styled.img`
  width: 13px;
  height: 16px;
  flex-shrink: 0;
  fill: var(--gray02, #747474);

  padding-left: 3px;
  padding-right: 7px;
`;

const LyricText = styled.div`
  width: 426px;
  min-height: 48px;
  flex-shrink: 0;

  overflow: hidden;
  color: var(--light_black, #232323);
  /* text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; */
  /* -webkit-box-orient: vertical;
  white-space: normal; */

  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */

  margin-top: 11px;
  cursor: ${(props) => (props.isTruncated ? 'auto' : 'pointer')};
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 426px;
`;
const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`;

const MapIconGray = styled.img`
  width: 16px;
  height: 17.801px;
  padding-right: 8px;
`;

const InfoText = styled.div`
  color: var(--gray02, #747474);
  text-align: right;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  padding-right: 12px;
  white-space: nowrap;
  flex-shrink: 0;
`;

const PlaceText = styled.div`
  color: var(--gray02, #747474);
  text-align: right;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  max-width: 220px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
`;

const MoreBtn = styled.span`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  cursor: pointer;
`;