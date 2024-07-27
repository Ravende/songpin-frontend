import React, { useState } from "react";
import styled from "styled-components";

const ColumnComponent = () => {
  const [isClicked, setIsClicked] = useState(false);
  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Column onClick={handleClick} isClicked={isClicked}>
      <Alarm isClicked={isClicked}>
        김김김김김이이이이이(@ABCDEABCDEAB) 님이 팔로우했어요
      </Alarm>
      <Time>2시간 전</Time>
    </Column>
  );
};

export default ColumnComponent;

const Column = styled.div`
  display: flex;
  width: 362px;
  padding: 12px 0px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  max-height: 76px;
  min-height: 52px;
  padding-right: 34px;
  padding-left: 34px;
  cursor: pointer;
  background: ${props =>
    props.isClicked ? "var(--offwhite, #EFEFEF)" : "var(--f8f8f8, #FCFCFC)"};
`;

const Alarm = styled.div`
  color: ${props =>
    props.isClicked
      ? " var(--gray02, #747474)"
      : "var(--light_black, #232323)"};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Time = styled.div`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;
