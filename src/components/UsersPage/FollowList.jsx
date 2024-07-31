import React from "react";
import styled from "styled-components";
import UserFollowInfo from "./UserFollowInfo";
const FollowList = ({ selectedMenu }) => {
  return (
    <ListContainer>
      <ContentBox>
        {selectedMenu === "followers" ? <UserFollowInfo /> : <UserFollowInfo />}
      </ContentBox>
    </ListContainer>
  );
};

export default FollowList;
const ListTitle = styled.div``;

const ListContainer = styled.div``;

const ContentBox = styled.div`
  padding: 33px;
  padding-top: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--gray, #bcbcbc);
`;
