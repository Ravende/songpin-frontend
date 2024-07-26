import React, { useState, useEffect } from "react";
import styled from "styled-components";
import MyInfoTop from "../../components/MyPage/MyInfoTop";
import PinFeed from "../../components/MyPage/PinFeed";
import MyPlaylists from "../../components/MyPage/MyPlaylists";
import Bookmarks from "../../components/MyPage/Bookmarks";
import SideSection from "../../components/common/SideSection";

const MyPage = () => {
  const [clickedPage, setClickedPage] = useState(
    localStorage.getItem("clickedPage") || "pinfeed",
  );

  const handlePageClick = page => {
    setClickedPage(page);
  };

  useEffect(() => {
    localStorage.setItem("clickedPage", clickedPage);
  }, [clickedPage]);

  useEffect(() => {
    const savedPage = localStorage.getItem("clickedPage");
    if (savedPage) {
      setClickedPage(savedPage);
    }
  }, []);

  return (
    <MyPageContainer>
      <SideSection style={{}}>
        <MyInfoTop />
        <TopBar>
          <PageSelect>
            <PageItem
              onClick={() => handlePageClick("pinfeed")}
              isActive={clickedPage === "pinfeed"}
            >
              핀 피드
            </PageItem>
            <PageItem
              onClick={() => handlePageClick("playlist")}
              isActive={clickedPage === "playlist"}
            >
              플레이리스트
            </PageItem>
            <PageItem
              onClick={() => handlePageClick("bookmark")}
              isActive={clickedPage === "bookmark"}
            >
              북마크
            </PageItem>
          </PageSelect>
          <Line />
        </TopBar>
        {clickedPage === "playlist" && <MyPlaylists />}
        {clickedPage === "bookmark" && <Bookmarks />}
      </SideSection>
      <ChosenPage>{clickedPage === "pinfeed" && <PinFeed />}</ChosenPage>
    </MyPageContainer>
  );
};

export default MyPage;

const MyPageContainer = styled.div`
  position: relative;
`;

const ChosenPage = styled.div`
  position: relative;
  top: -630px;
  right: -85px;
  width: 700px;
  height: calc(100vh - 295px);
  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 7px;
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: var(--gray, #bcbcbc);
    /* background-clip: padding-box;
    border: 5px solid transparent; */
  }
  &::-webkit-scrollbar-track {
    background: var(--offwhite, #efefef);
  }
`;

const TopBar = styled.div`
  display: flex;
  flex-direction: column;
  /* position: relative; */
`;

const PageSelect = styled.div`
  display: flex;
  flex-direction: row;
  gap: 36px;
  padding-left: 41px;
`;

const PageItem = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  padding: 6px;
  padding-bottom: 9px;
  ${props =>
    props.isActive && "border-bottom: 3px solid var(--light_black, #232323);"}
`;

const Line = styled.div`
  width: 528px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--gray, #bcbcbc);
`;
