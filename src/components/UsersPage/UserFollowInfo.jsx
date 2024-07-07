import React from 'react';
import styled from 'styled-components';
import UserInfo from './UserInfo';

// myFollowId props 전달 받아야 함
const UserFollowInfo = ({ myFollowId }) => {
  return (
    <UserFollowInfoBox>
      <UserInfo />
      <FollowButton myFollowId={myFollowId}>{myFollowId ? '팔로잉' : '팔로우'}</FollowButton>
    </UserFollowInfoBox>
  );
};

export default UserFollowInfo;

const UserFollowInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FollowButton = styled.div`
  width: 100px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 43px;
  border: 1px solid var(--gray02, #747474);
  background: ${({ myFollowId }) => (myFollowId ? 'var(--f8f8f8, #FCFCFC)' : 'var(--light_black, #232323)')};
  color: ${({ myFollowId }) => (myFollowId ? 'var(--light_black, #232323)' : 'var(--f8f8f8, #FCFCFC)')};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  cursor: pointer;
`;
