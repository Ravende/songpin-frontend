import React, { useState } from "react";
import styled from "styled-components";
import moreButton from "../../assets/images/MyPage/more-icon.svg";
import SmallModal from "./Modal/SmallModal";

const options = ["플레이리스트에 추가", "핀 수정", "핀 삭제"];

const PinModalBox = ({ top, right, padding }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [clickedOption, setClickedOption] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePopup = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = option => {
    setClickedOption(option);
    setIsOpen(false);
    handleModal();
  };

  const handleModal = () => {
    setIsModalOpen(prevState => !prevState);
  };

  const handleDeletePin = () => {
    setIsModalOpen(false);
    window.location.reload();
  };

  return (
    <PinModal>
      <MoreBtn src={moreButton} onClick={handlePopup} setPadding={padding} />
      {isOpen && (
        <MorePopup positionTop={top} positionRight={right}>
          {options.map(option => (
            <ListItem key={option} onClick={() => handleOptionClick(option)}>
              {option}
            </ListItem>
          ))}
        </MorePopup>
      )}
      {isModalOpen && clickedOption === "핀 삭제" && (
        <SmallModal
          text="핀을 삭제할까요?"
          onClose={handleModal}
          onDecide={handleDeletePin}
        />
      )}
    </PinModal>
  );
};

export default PinModalBox;

const PinModal = styled.div``;

const MoreBtn = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
  padding-left: ${props => props.setPadding};
  cursor: pointer;
`;

const MorePopup = styled.div`
  display: flex;
  /* width: 197px; */
  padding: 18px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 1px solid var(--gray02, #747474);
  background: var(--f8f8f8, #fcfcfc);
  z-index: 1000;
  position: absolute;
  top: ${props => props.positionTop};
  right: ${props => props.positionRight};
`;

const ListItem = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
