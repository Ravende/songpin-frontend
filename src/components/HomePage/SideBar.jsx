import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import sidebar_logo from '../../assets/sidebar/sidebar_logo.svg';
import sidebar_home from '../../assets/sidebar/sidebar_home.svg';
import sidebar_search from '../../assets/sidebar/sidebar_search.svg';
import sidebar_create from '../../assets/sidebar/sidebar_create.svg';
import sidebar_playlist from '../../assets/sidebar/sidebar_playlist.svg';
import sidebar_usersearch from '../../assets/sidebar/sidebar_usersearch.svg';
import sidebar_mypage from '../../assets/sidebar/sidebar_mypage.svg';

const SideBar = () => {
    const navigate = useNavigate();

    const onItemClick = (path) => {
        navigate(path);
    };

    return (
        <SideBarContainer>
            <PinFeatures>
                <StyledButton onClick={() => onItemClick('/home')} noBackground>
                    <HomeLogo src={sidebar_logo} alt="Home Logo" />
                </StyledButton>
                <StyledButton onClick={() => onItemClick('/home')}>
                    <Home src={sidebar_home} alt="Home" />
                </StyledButton>
                <StyledButton onClick={() => onItemClick('/search')}>
                    <Search src={sidebar_search} alt="Search" />
                </StyledButton>
                <StyledButton onClick={() => onItemClick('/create')}>
                    <Create src={sidebar_create} alt="Create" />
                </StyledButton>
                <StyledButton onClick={() => onItemClick('/playlist')}>
                    <Playlist src={sidebar_playlist} alt="Playlist" />
                </StyledButton>
            </PinFeatures>
            <UserFeatures>
                <StyledButton onClick={() => onItemClick('/users')}>
                    <UserSearch src={sidebar_usersearch} alt="Search User" />
                </StyledButton>
                <StyledButton onClick={() => onItemClick('/mypage')}>
                    <MyPage src={sidebar_mypage} alt="MyPage" />
                </StyledButton>
            </UserFeatures>
        </SideBarContainer>
    );
};

const SideBarContainer = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 80px;
    height: 100%;
    border: 1px solid var(--gray, #BCBCBC);
    background: var(--f8f8f8, #FCFCFC);
`;

const PinFeatures = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`;

const UserFeatures = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    margin-top: 50px;
    margin-bottom: 50px;
`;

const StyledButton = styled.button`
    background: none;
    border: none;
    padding: 0;
    margin: 20px 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:focus {
        outline: none;
    }

    &:focus::after {
        content: '';
        position: absolute;
        width: 60px;
        height: 60px;
        background: ${({ noBackground }) => (noBackground ? 'none' : 'var(--light_black, #232323)')};
        border-radius: 50%;
        z-index: -1;
    }

    &:hover {
    }
`;

const HomeLogo = styled.img`
    width: 40px;
    height: 40px;
`;

const Home = styled.img`
    width: 40px;
    height: 40px;
    transition: filter 0.3s ease;

    ${StyledButton}:focus & {
        filter: brightness(0) invert(1);
    }
`;

const Search = styled.img`
    width: 27.308px;
    height: 27.308px;
    padding: 16px;
    transition: filter 0.3s ease;

    ${StyledButton}:focus & {
        filter: brightness(0) invert(1);
    }
`;

const Create = styled.img`
    width: 40px;
    height: 40px;
    transition: filter 0.3s ease;

    ${StyledButton}:focus & {
        filter: brightness(0) invert(1);
    }
`;

const Playlist = styled.img`
    width: 43px;
    height: 43px;
    transition: filter 0.3s ease;

    ${StyledButton}:focus & {
        filter: brightness(0) invert(1);
    }
`;

const UserSearch = styled.img`
    width: 40px;
    height: 40px;
    transition: filter 0.3s ease;

    ${StyledButton}:focus & {
        filter: brightness(0) invert(1);
    }
`;

const MyPage = styled.img`
    width: 30px;
    height: 28px;
    transition: filter 0.3s ease;

    ${StyledButton}:focus & {
        filter: brightness(0) invert(1);
    }
`;

export default SideBar;