import React from "react";
import styled from "styled-components";
import pinIconSpark from "../../assets/images/MyPage/spark-51.svg";
import calendarIcon from "../../assets/images/MyPage/calendar.svg";
import searchIcon from "../../assets/images/MyPage/search.svg";
import PinMemoComponent from "./PinMemoComponent";
import { useNavigate } from "react-router-dom";

const PinFeed = () => {
  const navigate = useNavigate();
  const goCalendar = () => {
    navigate("/calendar");
  };
  const goMySearch = () => {
    navigate("/mypin-search");
  };

  return (
    <PinFeedContainer>
      <PinShow>
        <PinTimes>
          <PinIcon src={pinIconSpark} />
          <Num>9999</Num>
        </PinTimes>
        <ShowIcons>
          <Calendar src={calendarIcon} onClick={goCalendar} />
          <Search src={searchIcon} onClick={goMySearch} />
        </ShowIcons>
      </PinShow>
      <PinsSection>
        <PinMemoComponent />
        <PinMemoComponent />
        <PinMemoComponent />
        <PinMemoComponent />
      </PinsSection>
    </PinFeedContainer>
  );
};

export default PinFeed;

const PinFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  width: 528px;
`;

const PinShow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-left: 40px;
  margin-right: 35px;
`;

const PinTimes = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PinIcon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  //opacity: 0.8;
  padding-right: 8px;
`;

const Num = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const ShowIcons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`;

const Calendar = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  cursor: pointer;
`;

const Search = styled(Calendar)``;

const PinsSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 32px;
`;
