import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import PinComponent from './PinComponent';
import arrowDown from '../../assets/images/MusicSearchPage/arrow_down.svg';

const SideSection = () => {
  return (
    <SideComponent>
      <SideBar></SideBar>
      <SideBox>
        <SearchBar />
        <SongFilter>
          <FilterText>정렬기준</FilterText>
          <DropDown src={arrowDown} />
        </SongFilter>
        <PinComponent />
        <PinComponent />
      </SideBox>
    </SideComponent>
  );
};

export default SideSection;

const SideComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;

const SideBar = styled.div`
  width: 80px;
  border-right: 1px solid var(--gray, #bcbcbc);
`;

const SideBox = styled.div`
  /* width: 528px; */
  border-right: 1px solid var(--gray, #bcbcbc);
  padding: 33px;
  padding-top: 40px;
`;

const SongFilter = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 24px;
  align-items: center;
  width: 462px;
`;

const FilterText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  padding-right: 11.69px;
`;

const DropDown = styled.img`
  width: 10.616px;
  height: 6.016px;
  padding-right: 4.69px;
`;
