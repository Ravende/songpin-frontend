import React from 'react';
import styled from 'styled-components';

const PlaceComponent = ({onPlaceClick}) => {
  const handleClick = () => {
    const placeName = "신촌역";
    onPlaceClick(placeName);
  };

  return (
    <PlaceBox onClick={handleClick}>
      <Content>
        <PlaceName>신촌역</PlaceName>
        <PlaceAddress>서울 서대문구 신촌로 90</PlaceAddress>
      </Content>
      <Line />
    </PlaceBox>
  );
};

export default PlaceComponent;

const PlaceBox = styled.div`
  &:hover {
    opacity: 0.8;
    background: rgba(0, 0, 0, 0.2);
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 466px;
  padding: 32px 7px;
  justify-content: center;
  align-items: flex-start;
  opacity: 0.8;
`;

const PlaceName = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-bottom: 5px;
`;

const PlaceAddress = styled.div`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
`;

const Line = styled.div`
  width: 480px;
  height: 1px;
  background: var(--gray, #bcbcbc);
`;
