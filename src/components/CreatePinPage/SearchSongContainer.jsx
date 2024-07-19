import React, { useState } from 'react';
import styled from 'styled-components';
import SideSection from '../common/SideSection';
import PlainSearchBar from './PlainSearchBar';
import SearchSongs from '../MusicSearchPage/SearchPage/SearchSongs';

const SearchSongContainer = () => {

    return (
            <SideSection>
                <Content>
                    <PlainSearchBar />
                    <SearchResult>
                        <SearchSongs />
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
