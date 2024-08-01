import { Map, MapMarker } from "react-kakao-maps-sdk";
import MapFilter from "../../components/HomePage/MapFilter";
import SideBar from "../../components/HomePage/SideBar";
import SideSection from "../../components/common/SideSection";
import styled from "styled-components";
import PinComponent from "../../components/PlaylistPage/PinComponent";
import PlaceComponent from "../../components/HomePage/PlaceComponent";
import Notification from '../../components/common/Notification';

const HomePage = () => {
    return (
        <div style={{ position: "relative" }}>
        <SideBar />
        <SideSection>
            <Title>
            닉네임님, <br></br> 무슨 노래 듣고 계세요?
            </Title>
            <SongTxt>사람들은 이 노래를 듣고 있어요</SongTxt>
            <SongListContainer>
            <PinComponent />
            <PinComponent />
            <PinComponent />
            </SongListContainer>
            <PlaceTxt>사람들은 이 장소에서 핀을 등록했어요</PlaceTxt>
            <PlaceListContainer>
            <PlaceComponent />
            <PlaceComponent />
            <PlaceComponent />
            </PlaceListContainer>
        </SideSection>
        <MapFilter />
        <div
            style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
            zIndex: 0,
            }}
        >
            <Map
            center={{ lat: 37.56011030387691, lng: 126.94585449321849 }}
            style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
            }}
            ></Map>
        </div>
        <Notification></Notification>
        </div>
    );
};

export default HomePage;

const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-top: 40px;
    margin-bottom: 64px;
    margin-left: 38px;
    color: var(--light_black, #232323);
  /* title_bold */
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
`;

const SongTxt = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 32px;
    margin-left: 38px;
    color: var(--light_black, #232323);
    /* semititle_bold */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const PlaceTxt = styled.div`
    display: flex;
    justify-content: flex-start;
    margin-bottom: 32px;
    margin-left: 38px;
    color: var(--light_black, #232323);
    /* semititle_bold */
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
`;

const SongListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 38px;
    margin-bottom: 70px;
`;

const PlaceListContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-left: 38px;
`;
