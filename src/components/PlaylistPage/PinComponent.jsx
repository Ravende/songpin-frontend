import React, { useState } from 'react';
import styled from 'styled-components';
import albumImage from '../../assets/images/UsersPage/Rectangle 205.svg';
import mapIconBallad from '../../assets/images/MusicSearchPage/flower.svg';
import mapIconBlack from '../../assets/images/MusicSearchPage/flower_black.svg';
import mapIconGray from '../../assets/images/MusicSearchPage/flower_gray.svg';
import moreMenu from '../../assets/images/UsersPage/more_vert.svg';
const options = ['핀 수정', '핀 삭제'];

const PinComponent = ({ selectable, buttonVisible }) => {
  const [image, setImage] = useState(mapIconBlack);
  const [isOpen, setIsOpen] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    if (selectable) {
      setIsSelected((prev) => !prev);
    }
  };

  const handlePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <PinBox
      onClick={handleClick}
      onMouseEnter={() => setImage(mapIconBallad)}
      onMouseLeave={() => setImage(mapIconBlack)}
      bgColor={
        isSelected
          ? 'linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), var(--offwhite, #EFEFEF)'
          : 'var(--offwhite, #efefef)'
      }
    >
      <SongBox>
        <PinImg src={albumImage} alt="앨범 이미지" />
        <TitleBox>
          <PinTitle>
            <MapIcon src={image} alt="지도 아이콘" />
            <TitleText>
              사랑하긴 했었나요 스쳐가는 인연이었나요 짧지않은 우리 함께했던 시간들이 자꾸 내 마음을 가둬두네
            </TitleText>
            {buttonVisible && <MoreIcon src={moreMenu} alt="더보기 아이콘" onClick={handlePopup} />}
            {isOpen && (
              <MorePopup>
                {options.map((option) => (
                  <ListItem>{option}</ListItem>
                ))}
              </MorePopup>
            )}
          </PinTitle>
          <PinSinger>잔나비</PinSinger>
          <InfoBox>
            <InfoText>2024.04.04</InfoText>
            <PlaceText>이화여대 학문관</PlaceText>
            <InfoText>에서</InfoText>
          </InfoBox>
        </TitleBox>
      </SongBox>
    </PinBox>
  );
};

export default PinComponent;

const PinBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 462px;
  height: 100px;
  flex-shrink: 0;
  border-radius: 8px;
  justify-content: space-around;

  /* background: linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), var(--offwhite, #EFEFEF); */
  /* background: var(--offwhite, #efefef); */
  background: ${({ bgColor }) => bgColor || 'var(--offwhite, #efefef)'};
  cursor: pointer;
  margin-bottom: 12px;
`;

const PinImg = styled.img`
  width: 78px;
  height: 78px;
  flex-shrink: 0;
  /* padding-left: 12px; */
  border-radius: 4px;
`;

const SongBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 11px;
`;

const PinTitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const MapIcon = styled.img`
  width: 20px;
  height: 20.005px;
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

const InfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  white-space: nowrap;
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

const MoreIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 12px;
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
  top: 7%;
  left: 35%;
  /* 
  z-index: 1000;
  position: absolute;
  top: 100%; */
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
