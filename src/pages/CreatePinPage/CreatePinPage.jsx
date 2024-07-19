import React, { useState } from 'react';
import styled from 'styled-components';
import arrowDown from '../../assets/images/MusicSearchPage/arrow_down.svg';
import CreateSection from '../../components/CreatePinPage/CreateSection';
import SideSection from '../../components/common/SideSection';
import SearchSongs from '../../components/MusicSearchPage/SearchPage/SearchSongs';
import SearchSongContainer from '../../components/CreatePinPage/SearchSongContainer';
import SearchPlaceContainer from '../../components/CreatePinPage/SearchPlaceContainer';
import SearchPlaces from '../../components/MusicSearchPage/SearchPage/SearchPlaces';
import PinComponent from '../../components/CreatePinPage/PinComponent';
import { GenreList } from '../../constants/GenreList';
import { ReactComponent as Calendar} from '../../assets/images/CreatePin/calendar_month.svg';
import { ReactComponent as Location} from '../../assets/images/CreatePin/location_on.svg';
import PublicToggle from '../../components/common/PublicToggle';

const CreatePinPage = () => {
    let [inputCount, setInputCount] = useState(0);
    const [isSongSelected, setIsSongSelected] = useState(false);
    const [showSearchSongContainer, setShowSearchSongContainer] = useState(false);
    const [selectedPin, setSelectedPin] = useState(null);

    const onInputHandler = (e) => {
        setInputCount(e.target.value.length);
    };

    const handlePinClick = () => {
        setShowSearchSongContainer(true);
    };

    const handlePinSelect = (pinInfo) => {
        setSelectedPin(pinInfo);
        setIsSongSelected(true);
        setShowSearchSongContainer(false);
    };
    
    const handleSongSelection = () => {
        setIsSongSelected(true);
        setShowSearchSongContainer(!showSearchSongContainer);
    };

    return (
        <MainContainer>
            <CreateSection>
                <Content>
                    {!isSongSelected ? (
                        <PinBox onClick={handlePinClick}>
                            <PinImg></PinImg>
                            <PinText>노래를 선택해주세요.</PinText>
                        </PinBox>
                    ) : (
                        <PinComponent
                            onPinClick={handlePinClick}
                            pinInfo={selectedPin}
                        />
                    )}
                </Content>
                    <Title>언제</Title>
                    <When>언제 이 노래를 들었나요? <Calendar/></When>
                    <Title>어디서</Title>
                    <Where>이 노래를 들었던 장소는 어디였나요? <Location/></Where>
                    <Title>장르</Title>
                    {/* <GenreList></GenreList> */}
                    <Title>메모</Title>
                    <MemoArea
                        placeholder="이곳에 메모를 남겨주세요."
                        maxLength={200}
                        onChange={onInputHandler}
                    ></MemoArea> 
                    <TextNum>
                        <span>{inputCount}</span>
                        <span>/200</span>
                    </TextNum>
                    <IsPublic>
                        <Title>공개 여부</Title>
                        <PublicToggle />
                    </IsPublic>
                    <CreateBtn>핀 생성하기</CreateBtn>
            </CreateSection>
            {showSearchSongContainer && <SearchSongContainer onPinSelect={handlePinSelect}/>}
        </MainContainer>
    );
};
const MainContainer = styled.div`
    display: flex;
    flex-direction: row;
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 50px;
    //margin: 40px;
`;

const PinBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 462px;
    height: 100px;
    border-radius: 8px;
    background: var(--offwhite, #efefef);
    cursor: pointer;
    margin-bottom: 12px;
    /* &:active {
        border-radius: 8px;
        background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), var(--offwhite, #efefef);
    } */
`;

const PinImg = styled.img`
    width: 78px;
    height: 78px;
    margin-left: 13px;
    border-radius: 4px;
    background: var(--gray, #BCBCBC);
`;

const PinText = styled.div`
    display: flex;
    justify-content: center;
    margin-left: 80px;
    color: var(--gray02, #747474);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 15px;
    margin-bottom: 15px;
    margin-left: 32px;
    color: var(--light_black, #232323);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`;

const When = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    margin-left: 32px;
    padding-bottom: 10px;
    width: 462px;
    border-bottom: 1px solid #747474;
    color: var(--gray02, #747474);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`;

const Where = styled.div`
    display: flex;
    justify-content: space-between;
    margin-left: 32px;
    padding-bottom: 10px;
    width: 462px;
    border-bottom: 1px solid #747474;
    color: var(--gray02, #747474);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 140%;
`;

const MemoArea = styled.textarea`
    display: flex;
    margin-left: 30px;
    padding: 20px;
    width: 442px;
    height: 134px;
    resize: none;
    border: none;
    border-radius: 8px;
    background: var(--offwhite, #EFEFEF);
    color: var(--gray02, #747474);
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`;

const TextNum = styled.p`
    color: var(--gray, #BCBCBC);
    margin-right: 20px;
    text-align: right;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
`;

const IsPublic = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const CreateBtn = styled.button`
    display: flex;
    width: 462px;
    padding: 16px 0px;
    margin-left: 30px;
    margin-top: 53px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 1px solid var(--light_black, #232323);
    background: var(--light_black, #232323);
    color: var(--f8f8f8, #FCFCFC);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    cursor: pointer;
`;

export default CreatePinPage;
