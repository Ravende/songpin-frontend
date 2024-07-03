import React, { useState } from 'react';
import styled from 'styled-components';
import search from '../../assets/images/MusicSearchPage/search.svg';
import arrow_dropdown from '../../assets/images/MusicSearchPage/arrow_drop_down.svg';
// import SearchSongs from './SearchSongs';
// import SearchPlaces from './SearchPlaces';

const options = ['노래', '장소'];

const SearchBar = () => {
  // const renderComponent = () => {
  //   switch (selectedOption) {
  //     case '노래':
  //       return <SearchSongs />;
  //     case '장소':
  //       return <SearchPlaces />;
  //     default:
  //       return <SearchSongs />;
  //   }
  // };

  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <SearchBarComponent>
      <SearchBox>
        <Search>
          <Dropdown onClick={toggling}>
            <DropdownHeader>
              <SearchFilter>{selectedOption || '곡명'}</SearchFilter>
              <Toggle src={arrow_dropdown} alt="드롭다운" isOpen={isOpen} />
            </DropdownHeader>
            {isOpen && (
              <DropdownList>
                {options.map((option) => (
                  <ListItem onClick={onOptionClicked(option)} key={option}>
                    {option}
                  </ListItem>
                ))}
              </DropdownList>
            )}
          </Dropdown>
          <InputBox>
            <Input type="text" value={inputValue} onChange={handleChange} />
          </InputBox>
        </Search>
        <SearchIcon src={search} alt="검색 아이콘" />
      </SearchBox>
      <Line />
    </SearchBarComponent>
  );
};

export default SearchBar;

const SearchBarComponent = styled.div`
  display: flex;
  flex-direction: column;
  width: 462px;
  flex-wrap: wrap;
  padding-bottom: 20px;
`;

const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

const Search = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Dropdown = styled.div`
  position: relative;
  cursor: pointer;
`;

const DropdownHeader = styled.div`
  display: flex;
  flex-direction: row;
`;

const DropdownList = styled.div`
  border-radius: 0px 0px 8px 8px;
  border: 1px solid var(--gray02, #747474);
  background: var(--f8f8f8, #fcfcfc);
  display: inline-flex;
  padding: 12px 14px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  position: absolute;
  top: 160%;
`;

const ListItem = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  cursor: pointer;
`;

const SearchFilter = styled.div`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  padding-left: 4px;
`;

const Toggle = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 4px;
  cursor: pointer;
  transform: ${(props) => (props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const InputBox = styled.div`
  padding-left: 8px;
`;

const Input = styled.input`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  border: none;
  outline: none;
`;

const SearchIcon = styled.img`
  width: 30px;
  height: 30px;
  display: flex;
  cursor: pointer;
`;

const Line = styled.div`
  width: 462px;
  height: 1px;
  background: var(--light_black, #232323);
  margin-top: 11px;
`;
