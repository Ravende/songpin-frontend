import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from '../UsersPage/SearchBar';
import Playlist from './Playlist';
import arrowDown from '../../assets/images/MusicSearchPage/arrow_down.svg';

const values = ['정확도순', '핀 등록 많은순', '업데이트순'];

const PlaylistSearchSideSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('정확도순');

  const onValueClicked = (value) => () => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const toggling = () => setIsOpen(!isOpen);

  return (
    <SideComponent>
      <SideBar></SideBar>
      <SideBox>
        <ContentBox>
          {/* 검색된 문구가 남아있어야 함  */}
          <SearchBar placeholder="플레이리스트 검색" />
        </ContentBox>
        <Sorting>
          <DropdownSorting>
            <DropdownHeader onClick={toggling}>
              <SortingText>{selectedValue}</SortingText>
              <DropIcon src={arrowDown} isOpen={isOpen} />
            </DropdownHeader>
            {isOpen && (
              <DropdownList>
                {values.map((value) => (
                  <ListItem
                    onClick={onValueClicked(value)}
                    style={{ fontWeight: selectedValue === value ? '700' : '400' }}
                  >
                    {value}
                  </ListItem>
                ))}
              </DropdownList>
            )}
          </DropdownSorting>
        </Sorting>
        <PlaylistFeed>
          <Playlist />
          <Playlist />
          <Playlist />
        </PlaylistFeed>
      </SideBox>
    </SideComponent>
  );
};

export default PlaylistSearchSideSection;

const SideComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 608px;
`;

const SideBar = styled.div`
  width: 80px;
  border-right: 1px solid var(--gray, #bcbcbc);
`;

const SideBox = styled.div`
  width: 528px;
  border-right: 1px solid var(--gray, #bcbcbc);
  /* padding: 33px; */
  /* 스크롤바 왜 보이는지???
  overflow-y: auto;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  } */
`;

const ContentBox = styled.div`
  padding: 33px;
  padding-top: 40px;
  padding-bottom: 15px;
`;

const PlaylistFeed = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px 20px 70px 20px;
`;

const NoPlaylist = styled.div`
  color: var(--gray02, #747474);
  width: 528px;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  display: flex;
  justify-content: center;
  padding-top: 130px;
  padding-bottom: 130px;
`;

const Sorting = styled.div`
  display: flex;
  justify-content: flex-end;
  /* width: 528px; */
  padding: 0px 33px 9px 33px;
`;

const DropdownSorting = styled.div`
  display: flex;
  justify-content: flex-end;

  align-items: center;
  position: relative;
`;

const DropdownHeader = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SortingText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  padding-right: 11.69px;
`;

const DropIcon = styled.img`
  width: 10.616px;
  height: 6.016px;
  margin-right: 4.69px;
  cursor: pointer;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const DropdownList = styled.div`
  display: flex;
  width: 92px;
  padding: 12px;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  border-radius: 0px 0px 8px 8px;
  border: 1px solid var(--gray02, #747474);
  background: var(--f8f8f8, #fcfcfc);
  z-index: 1000;
  position: absolute;
  top: 60%;
`;

const ListItem = styled.div`
  height: 25px;
  align-self: stretch;
  color: var(--light_black, #232323);
  text-align: right;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  cursor: pointer;
`;
