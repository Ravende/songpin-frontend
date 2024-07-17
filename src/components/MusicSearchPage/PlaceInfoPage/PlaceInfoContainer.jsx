import React from 'react';
import styled from 'styled-components';
import backIcon from '../../../assets/images/MusicSearchPage/arrow_back.svg';
import location from '../../../assets/images/MusicSearchPage/location_icon.svg';
import shareButton from '../../../assets/images/MusicSearchPage/sharing_button.svg';
import sparkIcon from '../../../assets/images/MusicSearchPage/spark_122.svg';
import PinComponent from '../PinComponent';
import { useNavigate } from 'react-router-dom';

const PlaceInfoContainer = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/search');
  };

  return (
    <SideComponent>
      <SideBar></SideBar>
      <SideBox>
        <Content>
          <BackIcon src={backIcon} onClick={handleNavigate} />
          <PlaceDetails>
            <PlaceTitle>
              <LocationIcon src={location} />
              <Name>신촌역</Name>
            </PlaceTitle>
            <SharingBtn src={shareButton} />
          </PlaceDetails>
          <LocationInfo>서울 서대문구 신촌로 90</LocationInfo>
          <PinSection>
            <InfoSection>
              <PinCount>
                <PinIcon src={sparkIcon} />
                <Num>53</Num>
              </PinCount>
              <RecentDate>최근 등록 일자: 2020.3.20</RecentDate>
            </InfoSection>
            <PinsContainer>
              <PinComponent />
              <PinComponent />
              <PinComponent />
            </PinsContainer>
          </PinSection>
        </Content>
      </SideBox>
    </SideComponent>
  );
};

export default PlaceInfoContainer;

const SideComponent = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

const SideBar = styled.div`
  width: 80px;
  border-right: 1px solid var(--gray, #bcbcbc);
`;

const SideBox = styled.div`
  width: 528px;
  border-right: 1px solid var(--gray, #bcbcbc);
  padding-top: 40px;
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  margin-right: 30px;
`;

const BackIcon = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
  padding-left: 4px;
`;

const PlaceDetails = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 41px;
`;

const PlaceTitle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

const LocationIcon = styled.img`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
`;

const Name = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 32px;
  font-style: normal;
  font-weight: 700;
  line-height: 40px; /* 125% */
`;

const SharingBtn = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  cursor: pointer;
`;

const LocationInfo = styled.div`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  padding-left: 46px;
  padding-top: 8px;
`;

const PinSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PinCount = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

const PinIcon = styled.img`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  padding-left: 5px;
`;

const Num = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const RecentDate = styled.div`
  color: var(--gray02, #747474);
  text-align: center;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const PinsContainer = styled.div`
  padding-top: 28px;
`;
