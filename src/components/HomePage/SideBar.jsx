import React, { useState } from 'react';
import styled from 'styled-components';

const SideBar = () => {
    return (
        <SideBarContainer>
            <PinFeatures>
                <ul>
                    <li><button onClick={() => onItemClick('Home Logo')}>Home</button></li>
                    <li><button onClick={() => onItemClick('Home')}>Home</button></li>
                    <li><button onClick={() => onItemClick('Search Pin')}>Search</button></li>
                    <li><button onClick={() => onItemClick('Create Pin')}>Create</button></li>
                    <li><button onClick={() => onItemClick('Playlist')}>Playlist</button></li>
                </ul>
            </PinFeatures>
            <UserFeatures>
                <ul>
                    <li><button onClick={() => onItemClick('Search User')}>Search User</button></li>
                    <li><button onClick={() => onItemClick('MyPage')}>MyPage</button></li>
                </ul>
            </UserFeatures>
        </SideBarContainer>
    );
};

const SideBarContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 80px;
    height: 100%;
    background-color: white;
    padding: 20px;
`;

export default SideBar;