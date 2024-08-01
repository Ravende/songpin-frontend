import React from "react";
import styled from "styled-components";
import userLogoPop from "../../assets/images/UsersPage/user-logo-pop.svg"; //임시 유저 프로필

const UserInfo = () => {
  return (
    <UserInfoBox>
      <UserLogo src={userLogoPop} alt="User logo pop" />
      <UserNameBox>
        <UserName>송핀</UserName>
        <UserId>@songp1n</UserId>
      </UserNameBox>
    </UserInfoBox>
  );
};

export default UserInfo;

const UserInfoBox = styled.div`
  display: flex;
  flex-direction: row;
  /* margin: 32px 34px; */
  align-items: center;
`;

const UserLogo = styled.img`
  width: 60px;
  height: 60px;
`;

const UserNameBox = styled.div`
  flex-direction: column;
  margin-left: 28px;
`;

const UserName = styled.div`
  color: var(--light_black, #232323);
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  height: 24px;
  margin-top: 5px;
`;

const UserId = styled.div`
  color: var(--gray02, #747474);

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  height: 24px;
`;
