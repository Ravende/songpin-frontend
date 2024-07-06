import React, { useState } from 'react';
import styled from 'styled-components';
// import axios, { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import arrowDown from '../../../assets/images/MusicSearchPage/arrow_down.svg';
import SearchSongs from './SearchSongs';
import SearchPlaces from './SearchPlaces';

const options = ['정확도순', '핀 등록 많은순', '최근 핀 등록순'];

const SearchContainer = () => {
  // const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const onValueClicked = (value) => () => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  const toggling = () => setIsOpen(!isOpen);

  return (
    <SideComponent>
      <SideBar></SideBar>
      <SideBox>
        <Content>
          <SearchBar />
          <Sorting>
            <DropdownSorting>
              <DropdownHeader onClick={toggling}>
                <SortingText>{selectedValue || '정확도순'}</SortingText>
                <DropIcon src={arrowDown} isOpen={isOpen} />
              </DropdownHeader>
              {isOpen && (
                <DropdownList>
                  {options.map((option) => (
                    <ListItem onClick={onValueClicked(option)}>{option}</ListItem>
                  ))}
                </DropdownList>
              )}
            </DropdownSorting>
          </Sorting>
          <SearchResult>
            <SearchPlaces />
            {/* <SearchSongs /> */}
          </SearchResult>
        </Content>
      </SideBox>
    </SideComponent>
  );
};

export default SearchContainer;

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
  width: 528px;
  border-right: 1px solid var(--gray, #bcbcbc);
  padding-top: 40px;
  flex-shrink: 0;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Sorting = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 462px;
`;

const DropdownSorting = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-bottom: 33px;
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

const SearchResult = styled.div``;
