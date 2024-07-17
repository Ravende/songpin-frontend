import React from 'react';
import styled from 'styled-components';
import lockIcon from '../../assets/images/MyPage/lock.svg';

const MusicInfoPinPreview = () => {
  return (
    <PinsContainer>
      <PinPreview>
        <PinContent>
          <UserName>채연</UserName>
          <PinMemo>
            <SecretPin src={lockIcon} />
            사랑하긴 했었나요 스쳐가는 인연이었나요 누가 내 가슴에다 불을 질렀나 누가 내 심장에다 못을 박았나 그대의
            눈빛은 날 얼어붙게 해 그대의
            <MoreBtn>...더보기</MoreBtn>
          </PinMemo>
          <Details>
            <Date>2024.04.04</Date>
            <Place>이화여대 학문관에서</Place>
          </Details>
        </PinContent>
      </PinPreview>
    </PinsContainer>
  );
};

export default MusicInfoPinPreview;

const PinsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const PinPreview = styled.div`
  width: 462px;
  max-height: 137px;
  min-height: 113px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--offwhite, #efefef);
  margin-bottom: 12px;
`;

const PinContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 17px 21px 15px 15px;
`;

const UserName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  padding-left: 3px;
`;

const PinMemo = styled(UserName)`
  line-height: 150%; /* 24px */
  padding-top: 7px;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const SecretPin = styled.img`
  width: 13px;
  height: 16px;
  flex-shrink: 0;
  padding-right: 7px;
  padding-left: 1px;
  vertical-align: calc(-10%);
`;

const MoreBtn = styled.div`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
  padding-top: 4px;
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
