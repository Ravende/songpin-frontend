import React, { useState, useEffect } from "react";
import styled from "styled-components";
import arrowIcon from "../../assets/images/MyPage/arrow.svg";
import SideBar from "../HomePage/SideBar";

const SideSection = ({ children, isNotLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [loginModal, setLoginModal] = useState(false);

  const handleSideBox = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    //console.log(isNotLoggedIn);
    if (isNotLoggedIn) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isNotLoggedIn]);

  const handleSideBarClick = () => {
    if (isNotLoggedIn) {
      setLoginModal(true);
    }
  };

  return (
    <SideComponent>
      <SideBarContainer>
        <SideBar onClick={handleSideBarClick} />
      </SideBarContainer>
      {isOpen && (
        <>
          <SideBox isOpen={isOpen}>
            <Content>{children}</Content>
          </SideBox>
          <BoxHandle>
            <CloseBar onClick={handleSideBox}>
              <Arrow src={arrowIcon} isOpen={isOpen} />
            </CloseBar>
          </BoxHandle>
        </>
      )}
    </SideComponent>
  );
};

export default SideSection;

const SideComponent = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
  position: absolute;
  z-index: 10;
  /* overflow-y: overlay; */
`;

const SideBarContainer = styled.div`
  width: 80px;
  border-right: 1px solid var(--gray, #bcbcbc);
`;

const SideBox = styled.div`
  width: ${props => (props.isOpen ? "528px" : "0")};
  border-right: 1px solid var(--gray, #bcbcbc);
  flex-shrink: 0;
  height: 100vh;
  overflow-x: hidden;
  background-color: white;
  /* overflow-y: overlay; */

  &::-webkit-scrollbar {
    width: 7px;
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

const Content = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
`;

const BoxHandle = styled.div`
  display: flex;
  align-items: center;
  height: 120px;
  margin: auto;
`;

const CloseBar = styled.div`
  width: 44px;
  height: 120px;
  flex-shrink: 0;
  border: 1px solid var(--gray, #bcbcbc);
  cursor: pointer;
  border-left: none;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const Arrow = styled.img`
  fill: #bcbcbc;
  width: 30px;
  height: 30px;
  padding-left: 10px;
  transform: ${props => (props.isOpen ? "rotate(0deg)" : "rotate(180deg)")};
`;
