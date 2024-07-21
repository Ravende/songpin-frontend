import { useState } from "react";
import ModalCommon from "./ModalCommon";

const CreatePlaylistModal = ({ setModalCommon }) => {
  const createPlaylist = () => {};
  const [active, setActive] = useState(false);
  return (
    <ModalCommon
      modalText="플레이리스트 생성"
      inputPlaceholder="플레이리스트 이름"
      buttonName="완료"
      handleButton={createPlaylist}
      addPlaylist={false}
      createPlaylist={true}
      setModalCommon={setModalCommon}
      active={active}
      setActive={setActive}
    />
  );
};
export default CreatePlaylistModal;
