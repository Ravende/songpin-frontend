import { useState } from "react";
import down from "../../../../assets/common/dropdown.svg";
import styled from "styled-components";
import Dropdown from "./Dropdown";
const PlaylistDropdown = ({ placeholder }) => {
  const [DropdownView, setDropdownView] = useState(false);
  const [initState, setInitState] = useState(placeholder);

  const handleClickDropdown = () => {
    setDropdownView(!DropdownView);
  };

  return (
    <InfoWrapper>
      <DropDownWrapper>
        <button className="dropdownButton" onClick={handleClickDropdown}>
          <div className="placeholder">{initState}</div>
          <img src={down} alt="dropdown_icon" />
        </button>
        <Wrapper>
          <Dropdown visiblity={DropdownView}>
            <ul>
              <li>가나다라마바사</li>
              <li>플레이리스트제목</li>
            </ul>
          </Dropdown>
        </Wrapper>
      </DropDownWrapper>
      <div className="info">이미 해당 핀이 추가되었습니다.</div>
    </InfoWrapper>
  );
};

const InfoWrapper = styled.div`
  .info {
    color: var(--gray02, #747474);
    text-align: right;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    margin-top: 12px;
    margin-bottom: 5px;
  }
`;
const DropDownWrapper = styled.div`
  .dropdownButton {
    width: 500px;
    height: 60px;
    flex-shrink: 0;
    border: 1px solid var(--light_black, #232323);
    background: var(--f8f8f8, #fcfcfc);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .placeholder {
    color: var(--gray02, #747474);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
    margin-left: 20px;
  }
`;
const Wrapper = styled.div`
  ul {
    width: 500px;
    height: 100%;
    list-style: none;
    flex-shrink: 0;
    border: 1px solid var(--light_black, #232323);
    background: var(--f8f8f8, #fcfcfc);
    margin: 0;
    padding-left: 30px;
    padding-right: 30px;
    padding-bottom: 30px;
    box-sizing: border-box;
  }
  li {
    width: 369px;
    color: var(--light_black, #232323);
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%; /* 28px */
    margin-top: 30px;
    cursor: pointer;
  }
  li:hover {
    color: red;
  }
`;
export default PlaylistDropdown;
