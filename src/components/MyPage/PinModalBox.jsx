import React, { useState } from 'react';
import styled from 'styled-components';
import moreButton from '../../assets/images/MyPage/more-icon.svg';

const options = ['플레이리스트에 추가', '핀 수정', '핀 삭제'];

const PinModalBox = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handlePopup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <PinModal>
      <MoreBtn src={moreButton} onClick={handlePopup} />
      {isOpen && (
        <MorePopup>
          {options.map((option) => (
            <ListItem>{option}</ListItem>
          ))}
        </MorePopup>
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
  padding-left: 31px;
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
  top: 42px;
  right: -163px;
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
