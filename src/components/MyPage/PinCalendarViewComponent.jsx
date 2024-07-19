import react, { useState } from 'react';
import styled from 'styled-components';
import albumImgExample from '../../assets/images/MyPage/album-eg.png';
import pinIcon from '../../assets/images/MyPage/vector-icon.svg';
import moreButton from '../../assets/images/MyPage/more-icon.svg';
import lockIcon from '../../assets/images/MyPage/lock.svg';

const options = ['플레이리스트에 추가', '핀 수정', '핀 삭제'];

const PinCalendarViewComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PinBox>
      <AlbumImg src={albumImgExample} />
      <Content>
        <TitleSection>
          <SongInfo>
            <SongTitle>
              <SongIcon src={pinIcon} />
              <TitleText>사랑하긴 했었나요 스쳐지나가는 인연이었나요</TitleText>
            </SongTitle>
            <Singer>잔나비</Singer>
          </SongInfo>
          <MoreBtn src={moreButton} onClick={handlePopup} />
          {isOpen && (
            <MorePopup>
              {options.map((option) => (
                <ListItem>{option}</ListItem>
              ))}
            </MorePopup>
          )}
        </TitleSection>
        <Info>
          <Date>2024.04.04</Date>
          <Place>신촌에서</Place>
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
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 4px;
  justify-content: space-between;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
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

const MoreBtn = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  padding-left: 31px;
  cursor: pointer;
`;

const MorePopup = styled.div`
  display: flex;
  /* width: 197px; */
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
  top: 42px;
  right: -163px;
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

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
  padding-right: 11px;
`;

const Date = styled.div`
  overflow: hidden;
  color: var(--gray02, #747474);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const Place = styled(Date)``;
