import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Followers = () => {
  const navigate = useNavigate();

  const handleNavigation = (menu) => {
    navigate(`/user-follows?menu=${menu}`);
  };

  return (
    <FollowerComponent>
      <FollowInfoBox>
        <FollowBox onClick={() => handleNavigation('followers')}>
          <FollowNumberBox>9999</FollowNumberBox>
          <FollowTextBox>팔로워</FollowTextBox>
        </FollowBox>
        <FollowBox onClick={() => handleNavigation('following')}>
          <FollowNumberBox>9999</FollowNumberBox>
          <FollowTextBox>팔로잉</FollowTextBox>
        </FollowBox>
      </FollowInfoBox>
      <EditBtn>프로필 편집</EditBtn>
    </FollowerComponent>
  );
};

export default Followers;

const FollowerComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FollowInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 26px;
  margin-bottom: 13px;
`;

const FollowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const FollowNumberBox = styled.div`
  color: var(--light_black, #232323);
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
`;

const FollowTextBox = styled.div`
  color: var(--gray02, #747474);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const EditBtn = styled.div`
  width: 159px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 30px;
  border: 1px solid var(--light_black, #232323);
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--light_black, #232323);
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
