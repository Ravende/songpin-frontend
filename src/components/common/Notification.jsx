import React, { useState } from "react";
import styled from "styled-components";
import alarmIcon from "../../assets/notification/alarm.svg";
import ColumnComponent from "./ColumnContainer";

const Notification = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNotice = () => {
    setIsOpen(!isOpen);
  };

  return (
    <NotifComponent>
      <NotifBtn src={alarmIcon} onClick={handleNotice} />
      <RedDot />
      {isOpen && (
        <NoticePopup>
          <NoticeBox>
            <AlarmTitle>알림</AlarmTitle>
            <ContentSection>
              <ColumnComponent />
              <ColumnComponent />
              <ColumnComponent />
              <ColumnComponent />
            </ContentSection>
          </NoticeBox>
        </NoticePopup>
      )}
    </NotifComponent>
  );
};

export default Notification;

const NotifComponent = styled.div`
  z-index: 1000;
  position: relative;
`;

const NotifBtn = styled.img`
  width: 88px;
  height: 88px;
  flex-shrink: 0;
  cursor: pointer;
`;

const RedDot = styled.div`
  width: 17px;
  height: 17px;
  flex-shrink: 0;
  border-radius: 17px;
  background: #ff3844;
  position: absolute;
  top: 2px;
  left: 60px;
`;

const NoticePopup = styled.div`
  width: 430px;
  height: 407px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--gray02, #747474);
  background: var(--f8f8f8, #fcfcfc);
  position: absolute;
  bottom: 101px;
  right: 0;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 7px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 30px;
    background: var(--gray, #bcbcbc);
  }
  &::-webkit-scrollbar-track {
    border-radius: 10px;
    margin-top: 13px;
    margin-bottom: 13px;
    background: transparent;
  }
`;

const NoticeBox = styled.div`
  padding-top: 24px;
  display: flex;
  flex-direction: column;
`;

const AlarmTitle = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  padding-left: 34px;
`;

const ContentSection = styled.div`
  padding-top: 18.69px;
`;
