import React, { useState } from 'react';
import styled from 'styled-components';
import SideSection from './SideSection';
import PlainSearchBar from './PlainSearchBar';
import PinComponent from './PinComponent';
import pinImage from '../../assets/images/MusicSearchPage/Rectangle 217.png';

const SearchSongContainer = ({onPinSelect}) => {
    const handlePinClick = () => {
        const pinInfo = {
            title: "사랑",
            singer: "임재범",
            image: pinImage
        };
        onPinSelect(pinInfo);
    };

    return (
            <SideSection>
                <Content>
                    <PlainSearchBar />
                    <SearchResult>
                        <PinComponent onPinClick={handlePinClick}/>
                        <PinComponent onPinClick={handlePinClick}/>
                    </SearchResult>
                </Content>
            </SideSection>
        );
    };

export default SearchSongContainer;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
`;

const SearchResult = styled.div``;
