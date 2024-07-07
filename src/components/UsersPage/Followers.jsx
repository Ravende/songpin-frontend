import React, { useState } from 'react';
import styled from 'styled-components';

const Followers = () => {
  return (
    <FollowerComponent>
      <FollowBox>
        <FollowNumberBox>9999</FollowNumberBox>
        <FollowTextBox>팔로워</FollowTextBox>
      </FollowBox>
      <FollowBox>
        <FollowNumberBox>9999</FollowNumberBox>
        <FollowTextBox>팔로잉</FollowTextBox>
      </FollowBox>
    </FollowerComponent>
  );
};

export default Followers;

const FollowerComponent = styled.div`
  display: flex;
  flex-direction: row;
  /* margin: 32px 34px; */
`;

const FollowBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 13px;
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
