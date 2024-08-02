import React from "react";
import styled from "styled-components";
import SideSection from "../../components/common/SideSection";
import SearchBar from "../../components/UsersPage/SearchBar";
import UserInfo from "../../components/UsersPage/UserInfo";

const UserSearchPage = () => {
  //여기서 검색 후 responst로 받은 유저 리스트들 map함수 돌려서 각각 profileImg, nickname, handle 추출하여 UserInfo의 props로 전달해야 에러 안 남!! -영서
  return (
    <SideSection>
      <SearchBox>
        <SearchBar placeholder="핸들 또는 닉네임을 검색" />
      </SearchBox>
      <ContentBox>
        {/* <UserInfo profileImg={profileImg} nickname={nickname} handle={handle} /> */}
      </ContentBox>
    </SideSection>
  );
};

export default UserSearchPage;

const ContentBox = styled.div`
  padding: 34px;
  padding-top: 40px;
  border-bottom: 1px solid var(--gray, #bcbcbc);
`;

const SearchBox = styled.div`
  padding: 40px 34px 10px 34px;
  border-bottom: 1px solid var(--gray, #bcbcbc);
`;

const Line = styled.div`
  width: 528px;
  height: 1px;
  background: var(--gray, #bcbcbc);
`;
