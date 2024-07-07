import React from 'react';
import styled from 'styled-components';
import pinImage from '../../assets/images/UsersPage/library_music.svg';

const Playlist = () => {
  return (
    <div>
      <PinBox>
        <PinImg src={pinImage} alt="핀이미지" />
        <PinNum>50</PinNum>
      </PinBox>
      <h2>플레이리스트 콘텐츠</h2>
      {/* 플레이리스트 콘텐츠 추가 */}
    </div>
  );
};

export default Playlist;

const PinBox = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 37px;
  align-items: center;
`;

const PinImg = styled.img`
  width: 30px;
  height: 30px;
  flex-shrink: 0;
  opacity: 0.8;
  margin-left: 9px;
`;

const PinNum = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  margin-left: 8px;
`;
