import react, { useState } from "react";
import styled from "styled-components";
import albumImgExample from "../../assets/images/MyPage/album-eg.png";
import pinIcon from "../../assets/images/MyPage/vector-icon.svg";
import lockIcon from "../../assets/images/MyPage/lock.svg";
import PinModalBox from "../common/PinModalBox";

const PinMemoComponent = () => {
  return (
    <PinBox>
      <TitleSection>
        <AlbumImg src={albumImgExample} />
        <SongInfo>
          <SongTitle>
            <SongIcon src={pinIcon} />
            <TitleText>사랑하긴 했었나요 스쳐가는 인연이었나요aaaaa</TitleText>
          </SongTitle>
          <Singer>잔나비</Singer>
        </SongInfo>
        <PinModalBox top="48px" right="12px" />
      </TitleSection>
      <DetailsSection>
        <Memo>
          <Text>
            <SecretPin src={lockIcon} />
            사랑하긴 했었나요 스쳐가는 인연이었나요 누가 내 가슴에다 불을 질렀나
            누가 내 심장에다 못을 박았나 그대의 눈빛은 날 얼어붙게 해 그대의
          </Text>
        </Memo>
        <Info>
          <Date>2024.04.04</Date>
          <Place>이화여대 학문관</Place>
          <PlaceText>에서</PlaceText>
        </Info>
      </DetailsSection>
    </PinBox>
  );
};

export default PinMemoComponent;

const PinBox = styled.div`
  margin: 0 33px 12px 33px;
  padding: 15px 12px 15px 14px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--offwhite, #efefef);
  position: relative;
`;

const TitleSection = styled.div`
  display: flex;
  flex-direction: row;
`;

const AlbumImg = styled.img`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
  border-radius: 4px;
  padding-top: 1px;
  padding-right: 12px;
`;

const SongInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  max-width: 306px;
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

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 9px;
  padding-right: 9px;
`;

const Memo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Text = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
`;

const SecretPin = styled.img`
  width: 13px;
  height: 16px;
  flex-shrink: 0;
  padding-right: 8px;
  padding-left: 3px;
  vertical-align: calc(-12%);
`;

const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding-top: 4px;
  white-space: nowrap;
`;

const Date = styled.div`
  color: var(--gray02, #747474);
  text-overflow: ellipsis;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const Place = styled(Date)`
  max-width: 218px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-shrink: 0;
  padding-left: 8px;
`;

const PlaceText = styled(Date)`
  white-space: nowrap;
  flex-shrink: 0;
  padding-right: 2px;
`;
