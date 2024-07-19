import ModalCommon from "./ModalCommon";

const AddPlaylistModal = () => {
  const addPlaylist = () => {};
  return (
    <ModalCommon
      modalText="핀을 플레이리스트에 추가"
      inputPlaceholder="플레이리스트를 선택"
      buttonName="완료"
      handleButton={addPlaylist}
      addPlaylist="true"
    />
  );
};
export default AddPlaylistModal;
