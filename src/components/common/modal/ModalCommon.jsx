import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Input from "../Input";
import Button from "../Button";
import PlaylistDropdown from "./dropdown/PlaylistDropdown";

const ModalCommon = ({
  modalText,
  inputPlaceholder,
  buttonName,
  handleButton,
  addPlaylist,
  createPlaylist,
}) => {
  const [active, setActive] = useState(true);
  const modalRef = useRef(null);
  const [modalCommon, setModalCommon] = useState(false);
  useEffect(() => {
    console.log(modalText);
  }, [modalText]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalCommon(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
  }, [setModalCommon]);

  return (
    <Wrapper>
      {!modalCommon && (
        <ModalWrapper ref={modalRef}>
          <div className="modalText">{modalText}</div>
          <InputButton>
            {addPlaylist && (
              <PlaylistDropdown
                placeholder={inputPlaceholder}
                setActive={setActive}
              />
            )}
            {/* {createPlaylist && <></>}토글 추가 */}
            <Button active={active} name={buttonName} onClick={handleButton} />
          </InputButton>
        </ModalWrapper>
      )}
    </Wrapper>
  );
};

const InputButton = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
`;

const Wrapper = styled.div`
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  inset: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalWrapper = styled.div`
  width: 740px;
  height: 518px;
  flex-shrink: 0;
  border-radius: 19px;
  background: var(--f8f8f8, #fcfcfc);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  .modalText {
    color: var(--light_black, #232323);
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px; /* 125% */
    margin-bottom: 56px;
  }
`;

export default ModalCommon;
