import ModalCommon from "./ModalCommon";


const CreatePlaylistModal = ({ setModalCommon }) => {
  const createPlaylist = () => {};
  return (
    <ModalCommon
      modalText="플레이리스트 생성"
      inputPlaceholder="플레이리스트 이름"
      buttonName="완료"
      handleButton={createPlaylist}
      addPlaylist={false}
      createPlaylist="true"
      setModalCommon={setModalCommon}
    />
  );
};
export default CreatePlaylistModal;