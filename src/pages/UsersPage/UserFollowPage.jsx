import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import FollowList from "../../components/UsersPage/FollowList";
import backArrow from "../../assets/images/UsersPage/arrow_back_ios.svg";
import SideSection from "../../components/common/SideSection";
import { useQuery } from "@tanstack/react-query";
import { getMyProfile } from "../../services/api/myPage";

const UserFollowPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedMenu, setSelectedMenu] = useState("followers");

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
  const profileData = data;
  const handle = profileData.handle;

  // useEffect(() => {
  //   const params = new URLSearchParams(location.search);
  //   const menu = params.get("menu");
  //   if (menu === "following") {
  //     setSelectedMenu("following");
  //   } else {
  //     setSelectedMenu("followers");
  //   }
  // }, [location.search]);

  const handleBackClick = () => {
    navigate(-1);
  };
  return (
    <SideSection>
      <ContentBox>
        <TopBox>
          <BackBtn src={backArrow} onClick={handleBackClick} />
          <UserId>@{handle}</UserId>
        </TopBox>
        <MenuBox>
          <MenuText
            isSelected={selectedMenu === "followers"}
            onClick={() => setSelectedMenu("followers")}
          >
            팔로워
          </MenuText>
          <MenuText
            isSelected={selectedMenu === "following"}
            onClick={() => setSelectedMenu("following")}
          >
            팔로잉
          </MenuText>
        </MenuBox>
      </ContentBox>
      <FollowList selectedMenu={selectedMenu} />
    </SideSection>
  );
};

export default UserFollowPage;

const ContentBox = styled.div`
  padding: 34px;
  padding-top: 40px;
  padding-bottom: 0px;
  border-bottom: 1px solid var(--gray, #bcbcbc);
`;

const TopBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const BackBtn = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
`;

const UserId = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 166.667% */
  margin-left: 10px;
`;

const MenuText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 212px;
  padding-top: 22px;
  padding-bottom: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom: ${props =>
    props.isSelected ? "3px solid var(--light_black, #232323)" : "none"};
`;

const MenuBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;
