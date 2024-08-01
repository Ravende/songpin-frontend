import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate,useParams } from 'react-router-dom';
import backArrow from '../../assets/images/UsersPage/arrow_back_ios.svg';
import checked from '../../assets/images/PlaylistPage/checkbox_checked.svg';
import unchecked from '../../assets/images/PlaylistPage/checkbox_unchecked.svg';
import PinComponent from '../../components/PlaylistPage/PinComponent';
import SideSection from '../../components/common/SideSection';
import PublicToggle from '../../components/common/PublicToggle';
import { getPlaylistDetail,updatePlaylist } from '../../services/api/stats';

const PlaylistEditPage = () => {
  const { playlistId } = useParams();
  const navigate = useNavigate();
  const [playlistData, setPlaylistData] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [isPublic, setIsPublic] = useState(true); // 추가: 공개 여부 상태
  const [inputValue, setInputValue] = useState('');
  const [pinList, setPinList] = useState([]); // 추가: 핀 리스트 상태

  useEffect(() => {
    const fetchPlaylistDetail = async () => {
      try {
        const data = await getPlaylistDetail(playlistId);
        setPlaylistData(data);
        setInputValue(data.playlistName);
        setIsPublic(data.visibility === 'PUBLIC');
        setPinList(data.pinList.map(pin => ({ ...pin, isSelected: false }))); // 핀 데이터에 isSelected 추가
      } catch (error) {
        console.error("Error fetching playlist detail:", error);
      }
    };

    fetchPlaylistDetail();
  }, [playlistId]);
  const handleChange = (event) => {
    const { value } = event.target;
    if (value.length <= 40) {
      setInputValue(value);
    }
  };

  const handleBackClick = () => {
    navigate(-1);
  };
  const handleCheckClicked = () => {
    const newIsChecked = !isChecked;
    setIsChecked(newIsChecked);
    setPinList(pinList.map(pin => ({ ...pin, isSelected: newIsChecked }))); // 모든 핀의 isSelected 상태 업데이트
  };

  const handleToggleClick = () => {
    setIsPublic((prev) => !prev);
  };
  const handleUpdatePlaylist = async () => {
    try {
      const selectedPins = pinList.filter(pin => pin.isSelected);
      await updatePlaylist(playlistId, inputValue, isPublic ? 'PUBLIC' : 'PRIVATE', pinList.length, pinList);
      navigate(-1);
    } catch (error) {
      console.error("Error updating playlist:", error);
    }
  };

  const handlePinSelect = (id) => {
    setPinList(prev =>
      prev.map(pin => (pin.playlistPinId === id ? { ...pin, isSelected: !pin.isSelected } : pin))
    );
  };


  return (
    <SideSection>
      <EditContainer>
        <ContentBox>
          <BackBtn src={backArrow} onClick={handleBackClick} />
          <MainText>플레이리스트 편집</MainText>
          {/* 나중에 이부분에 모달창 추가  */}
          <BtnText isDisabled={!inputValue} onClick={handleUpdatePlaylist}>완료</BtnText>
        </ContentBox>
        <ContentBox>
          <BodyText>플레이리스트 이름</BodyText>
          <Edit>
              <EditBox>              
                <EditText type="text" value={inputValue} onChange={handleChange} /> 
              <AlarmMessage>{inputValue.length}/40</AlarmMessage>
              </EditBox>
              <Line />
            </Edit>
        </ContentBox>
        <ContentBox>
          <BodyText>공개 여부</BodyText>
          <PublicToggle setVisibility={setIsPublic}/>
        </ContentBox>
        <ContentBox>
          <SelectBox>
            <TotalIcon src={isChecked ? checked : unchecked} alt="전체선택 버튼" onClick={handleCheckClicked} />
            <SelectText>전체선택</SelectText>
          </SelectBox>
          {/* 나중에 이부분에 삭제 모달창 추가 및 api 연결  */}
          <BtnText>삭제</BtnText>
        </ContentBox>
        <PinContainer>
        {pinList.map(pin => (
            <PinComponent key={pin.playlistPinId} pin={pin} selectable={true} buttonVisible={false} onSelect={handlePinSelect}/>
          ))}
        </PinContainer>
        </EditContainer>
    </SideSection>
  );
};

export default PlaylistEditPage;

const EditContainer = styled.div`
padding:34px;
padding-top:40px`;


const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 45px;
`;

const BackBtn = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  padding-top: 5px;
  cursor: pointer;
`;

const MainText = styled.div`
  color: var(--light_black, #232323);
  text-align: center;
  font-family: Pretendard;
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 40px; /* 166.667% */
`;

const BtnText = styled.div`
    color: ${({ isDisabled }) => (isDisabled ? 'var(--gray, #BCBCBC)' : 'var(--light_black, #232323)')};
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding-right: 4px;
  cursor: pointer;
`;

const BodyText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const TotalIcon = styled.img`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const SelectText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  padding-left: 9px;
`;

const SelectBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const PinContainer = styled.div``;

const Edit = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditText = styled.input`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  border: none;
  outline: none;
`;

const Line = styled.div`
  width: 293px;
  height: 1px;
  background: var(--gray02, #747474);
`;

const AlarmMessage = styled.div`
  color: var(--gray02, #747474);
  text-align: right;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const EditBox = styled.div`
display:flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
`

const ToggleBox = styled.div`
display:flex;
flex-direction: row;
align-items: center;
`

const ToggleText = styled.div`
color: var(--gray02, #747474);
font-family: Pretendard;
font-size: 16px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 24px */
padding-right:16px;
`

const ToggleBtn = styled.img`
width: 60px;
height: 30px;
 transform: ${({ isPublic }) => (isPublic ? 'rotate(0deg)' : 'rotate(180deg)')};
 cursor:pointer;
`