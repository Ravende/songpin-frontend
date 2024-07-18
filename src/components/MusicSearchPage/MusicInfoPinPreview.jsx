import React, { useState } from 'react';
import styled from 'styled-components';
import lockIcon from '../../assets/images/MyPage/lock.svg';
import { useNavigate } from 'react-router-dom';

const MusicInfoPinPreview = () => {
  const [isTruncated, setIsTruncated] = useState(true);

  const toggleTruncation = () => {
    setIsTruncated(!isTruncated);
  };

  const text =
    '사랑하긴 했었나요 스쳐가는 인연이었나요 누가 내 가슴에다 불을 질렀나 누가 내 심장에다 못을 박았나 그대의 눈빛은 날 얼어붙게 해어쩌구';

  const displayText = isTruncated ? text.substring(0, 68) : text;

  const navigate = useNavigate();
  const goUsersPage = () => {
    navigate('/users');
  };

  return (
    <PinsContainer>
      <PinPreview isTruncated={isTruncated}>
        <PinContent>
          <UserName onClick={goUsersPage}>채연</UserName>
          <PinMemo isTruncated={isTruncated}>
            <SecretPin src={lockIcon} />
            {displayText}
            {isTruncated && <MoreBtn onClick={toggleTruncation}> ...더보기</MoreBtn>}
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
  /* max-height: 137px; */
  /* max-height: ${(props) => (props.isTruncated ? '137px' : 'auto')}; */
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
  display: inline-block;
`;

const UserName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  cursor: pointer;
  display: inline-block;
`;

const PinMemo = styled(UserName)`
  line-height: 150%; /* 24px */
  padding-top: 7px;
  cursor: auto;
  /* display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2; */
  /* max-height: ${(props) => (props.isTruncated ? '48px' : 'none')}; 2줄 이상 넘어가면 끊기 */
`;

const SecretPin = styled.img`
  width: 13px;
  height: 16px;
  flex-shrink: 0;
  padding-right: 8px;
  padding-left: 3px;
  vertical-align: calc(-10%);
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
