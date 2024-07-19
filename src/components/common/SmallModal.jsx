import React from 'react';
import styled from 'styled-components';

const SmallModal = () => {
  return (
    <ModalComponent>
      <Message>핀을 삭제할까요?</Message>
      <Buttons>
        <CancelBtn>
          <CancelText>취소</CancelText>
        </CancelBtn>
        <DecideBtn>
          <DecideText>삭제</DecideText>
        </DecideBtn>
      </Buttons>
    </ModalComponent>
  );
};

export default SmallModal;

const ModalComponent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 600px;
  height: 300px;
  flex-shrink: 0;
  border-radius: 19px;
  background: var(--f8f8f8, #fcfcfc);
`;

const Message = styled.div`
  color: var(--light_black, #232323);
  text-align: center;
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
  padding-top: 88px;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  padding-top: 64px;
  padding-bottom: 48px;
  gap: 21px;
`;

const CancelBtn = styled.div`
  width: 241px;
  height: 60px;
  flex-shrink: 0;
  border: 1px solid var(--light_black, #232323);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const CancelText = styled.div`
  color: var(--light_black, #232323);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 166.667% */
`;

const DecideBtn = styled(CancelBtn)`
  background: var(--light_black, #232323);
`;

const DecideText = styled(CancelText)`
  color: var(--f8f8f8, #fcfcfc);
`;
