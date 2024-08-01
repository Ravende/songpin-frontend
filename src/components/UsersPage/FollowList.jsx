import React from "react";
import styled from "styled-components";
import UserFollowInfo from "./UserFollowInfo";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../../services/api/myPage";
const FollowList = ({ selectedMenu }) => {
  const { isError, data, error } = useQuery({
    queryKey: ["getMyProfile"],
    queryFn: getMyProfile,
  });
  if (!data) {
    return <div>데이터가 없습니다.</div>;
  }

  if (isError) {
    console.error("Error fetching user info:", error);
    return <div>오류 발생: {error.message}</div>;
  }
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
