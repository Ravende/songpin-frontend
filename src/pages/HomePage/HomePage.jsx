import { Map, MapMarker} from "react-kakao-maps-sdk";
import MapFilter from '../../components/HomePage/MapFilter';
import SideBar from '../../components/HomePage/SideBar';

const HomePage = () => {
    return(
        <div style={{position: "relative"}}>
            <SideBar />
            <MapFilter />
            <div style={{ position: "relative", width: "1920px", height: "1080px" }}>
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
        </div>
    )
};

export default HomePage;
