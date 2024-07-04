import React, { useState } from 'react';
import styled from 'styled-components';
import open_dropdown from '../../assets/filter/open_dropdown.svg';
import close_dropdown from '../../assets/filter/close_dropdown.svg';

const MapFilter = () => {
    const [selectedOption, setSelectedOption] = useState("1week"); // 기본 선택 항목: 최근 일주일
    const [showOptions, setShowOptions] = useState(false); // 드롭다운 옵션 상태: 보이기/감추기
    const [showCalender, setShowCalender] = useState(false);
    const [showGenre, setShowGenre] = useState(false);

    const selectTerm = (term) => {
        setSelectedOption(term);
        setShowOptions(false);
    };

    return(
        <FilterContainer>
            <GivenOptions onClick={() => setShowOptions(!showOptions)}>
                {selectedOption === "1week" && (
                    <span>최근 일주일</span>
                )}
                {selectedOption === "1month" && (
                    <span>최근 한 달</span>
                )}
                {selectedOption === "3months" && (
                    <span>최근 세 달</span>
                )}
                <DropdownIcon src={showOptions ? close_dropdown : open_dropdown} alt="dropdown icon" />
                {showOptions && (
                    <Dropdown>
                        <Option onClick={() => selectTerm("1week")}>최근 일주일</Option>
                        <Option onClick={() => selectTerm("1month")}>최근 한 달</Option>
                        <Option onClick={() => selectTerm("3months")}>최근 세 달</Option>
                    </Dropdown>
                )}
            </GivenOptions>
            <SetTerm onClick={() => setShowCalender(!showCalender)}>기간 직접 설정
                <DropdownIcon src={showCalender ? close_dropdown : open_dropdown} alt="dropdown icon" />
            </SetTerm>
            <SetGenre onClick={() => setShowGenre(!showGenre)}>장르별
                <DropdownIcon src={showGenre ? close_dropdown : open_dropdown} alt="dropdown icon" />
            </SetGenre>
        </FilterContainer>
    );
};

const FilterContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 90%;
    height: 44px;
    margin-top: 20px;
    border: none;
    background: none;
    z-index: 100; // 지도 위로 출력
`;

const GivenOptions = styled.div`
    position: relative;
    display: flex;
    padding: 10px 16px 10px 20px;
    width: 120px;
    height: 24px;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    border-radius: 24px;
    border: 1px solid var(--gray02, #747474);
    background: var(--offwhite_, #FCFCFC);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    cursor: pointer;
`;

const DropdownIcon = styled.img`
    width: 30px;
    height: 30px;
    margin-left: 4px;
`;

const Dropdown = styled.div`
    position: absolute;
    top: 120%;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    width: 154px;
    padding: 12px 0px;
    flex-direction: column;
    align-items: center;
    border-radius: 24px;
    border: 1px solid var(--gray02, #747474);
    background: var(--f8f8f8, #FCFCFC);
    color: var(--light_black, #232323);
`;

const Option = styled.div`
    margin-top: 5px;
    margin-bottom: 5px;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    color: var(--light_black, #232323);
    border: none;
    background: none;
`;

const SetTerm = styled.div`
    position: relative;
    display: flex;
    padding: 10px 16px 10px 20px;
    width: 142px;
    height: 24px;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    border-radius: 24px;
    border: 1px solid var(--gray02, #747474);
    background: var(--offwhite_, #FCFCFC);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    cursor: pointer;
`;

const SetGenre = styled.div`
    position: relative;
    display: flex;
    padding: 10px 16px 10px 20px;
    width: 85px;
    height: 24px;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    border-radius: 24px;
    border: 1px solid var(--gray02, #747474);
    background: var(--offwhite_, #FCFCFC);
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    cursor: pointer;
`;

export default MapFilter;
