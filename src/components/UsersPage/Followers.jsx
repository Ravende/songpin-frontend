import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Followers = ({ myFollowId }) => {
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
      <FollowBtn myFollowId={myFollowId}>{myFollowId ? '팔로잉' : '팔로우'}</FollowBtn>
    </FollowerComponent>
  );
};

export default Followers;

const FollowerComponent = styled.div`
  display: flex;
  flex-direction: column;
  /* margin: 32px 34px; */
`;

const FollowInfoBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const FollowBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 13px;
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

const FollowBtn = styled.div`
  width: 159px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 30px;
  background: ${({ myFollowId }) => (myFollowId ? 'var(--f8f8f8, #FCFCFC)' : 'var(--light_black, #232323)')};
  color: ${({ myFollowId }) => (myFollowId ? 'var(--light_black, #232323)' : 'var(--f8f8f8, #FCFCFC)')};
  display: flex;
  width: 142px;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
  text-align: center;
  cursor: pointer;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
