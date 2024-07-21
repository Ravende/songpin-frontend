import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import backArrow from '../../assets/images/UsersPage/arrow_back_ios.svg';
import checked from '../../assets/images/PlaylistPage/checkbox_checked.svg';
import unchecked from '../../assets/images/PlaylistPage/checkbox_unchecked.svg';
import PinComponent from './PinComponent';

const PlaylistEditSideSection = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const handleBackClick = () => {
    navigate(-1);
  };
  const handleCheckClicked = () => {
    setIsChecked(!isChecked);
  };

  return (
    <SideComponent>
      <SideBar></SideBar>
      <SideBox>
        <ContentBox>
          <BackBtn src={backArrow} onClick={handleBackClick} />
          <MainText>플레이리스트 편집</MainText>
          <BtnText>완료</BtnText>
        </ContentBox>
        <ContentBox>
          <BodyText>플레이리스트 이름</BodyText>
        </ContentBox>
        <ContentBox>
          <BodyText>공개 여부</BodyText>
        </ContentBox>
        <ContentBox>
          <SelectBox>
            <TotalIcon src={isChecked ? checked : unchecked} alt="전체선택 버튼" onClick={handleCheckClicked} />
            <SelectText>전체선택</SelectText>
          </SelectBox>
          <BtnText>삭제</BtnText>
        </ContentBox>
        <PinContainer>
          <PinComponent selectable={true} buttonVisible={false} />
          <PinComponent selectable={true} buttonVisible={false} />
          <PinComponent selectable={true} buttonVisible={false} />
        </PinContainer>
      </SideBox>
    </SideComponent>
  );
};

export default PlaylistEditSideSection;

const SideComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 608px;
`;

const SideBar = styled.div`
  width: 80px;
  border-right: 1px solid var(--gray, #bcbcbc);
`;

const SideBox = styled.div`
  width: 528px;
  border-right: 1px solid var(--gray, #bcbcbc);
  padding: 40px 34px 40px 34px;
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
`;

const BackBtn = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  padding-top: 5px;
  cursor: pointer;
`;

const MainText = styled.div`
  color: var(--light_black, #232323);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 166.667% */
`;

const BtnText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-right: 4px;
  cursor: pointer;
`;

const BodyText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TotalIcon = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const SelectText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  padding-left: 9px;
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PinContainer = styled.div``;
