import React from "react";
import styled from "styled-components";
import UserInfo from "./UserInfo";
import { deleteFollowing } from "../../services/api/myPage";

// myFollowId props 전달 받아야 함
const UserFollowInfo = ({
  profileImg,
  nickname,
  handle,
  isFollowing,
  followId,
}) => {
  const handleFollow = async () => {
    try {
      if (isFollowing) {
        const res = await deleteFollowing(followId);
        console.log(res);
      }
    } catch (error) {
      console.error("Error", error);
    }
  };

  return (
    <UserFollowInfoBox>
      <UserInfo
        myPage={true}
        profileImg={profileImg}
        nickname={nickname}
        handle={handle}
      />
      <FollowBtn onClick={handleFollow} isFollowing={isFollowing}>
        {isFollowing ? "팔로잉" : "팔로우"}
      </FollowBtn>
    </UserFollowInfoBox>
  );
};

export default UserFollowInfo;

const UserFollowInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const FollowBtn = styled.div`
  width: 100px;
  height: 38px;
  flex-shrink: 0;
  border-radius: 43px;
  border: 1px solid var(--gray02, #747474);
  background: ${({ isFollowing }) =>
    isFollowing ? "var(--f8f8f8, #FCFCFC)" : "var(--light_black, #232323)"};
  color: ${({ isFollowing }) =>
    isFollowing ? "var(--light_black, #232323)" : "var(--f8f8f8, #FCFCFC)"};
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
