import React from 'react';
import styled from 'styled-components';

const MusicInfoPinPreview = () => {
  return (
    <PinsContainer>
      <PinPreview>
        <PinContent>
          <UserName>채연</UserName>
          <PinMemo>
            내 인생 노래 중 하나. 어떻게 이런 음악이 나올 수 있을까? 나중에 누군가 노래를 추천해 달라 한다면 꼭 이 곡을
            추천하고 싶다. 우와 그런데
          </PinMemo>
          <Details>
            <Date>2024.4.2</Date>
            <Place>대현동에서</Place>
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
  max-height: 147px;
  min-height: 113px;
  flex-shrink: 0;
  border-radius: 8px;
  background: var(--offwhite, #efefef);
  margin-bottom: 12px;
`;

const PinContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 30px 18px 27px;
`;

const UserName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
`;

const PinMemo = styled(UserName)`
  padding-top: 8px;
  overflow: hidden;
  /* text-overflow: ellipsis; */
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
`;

const Details = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 8px;
  padding-top: 8px;
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
