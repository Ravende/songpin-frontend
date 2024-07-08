import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { MenuList } from "../../constants/MenuList";

const NavBar = () => {

    return<>
    <div>
        <Navbar>
            <Menu>
        {MenuList.map((it) => (
            <StyledNavLink
              to={it.to}
              key={it.id}
            >
              {it.name}
            </StyledNavLink>
          ))}
          </Menu>
        <Login>
            <ul>
        <li>로그인</li>
        <li>회원가입</li>
        </ul>
        </Login>
        </Navbar>
        </div>
        </>
};

const Navbar = styled.nav`
display: flex;
justify-content: space-between;
margin-top:48px;
z-index:2;
`
const Menu = styled.ul`
    display: flex;
    gap: 101px;
    list-style: none;
    font-weight: bold;
    font-size: 24px;
    padding: 0;
    margin: 0;
    margin-left: 100px;
`;

const StyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: black;

    &.active {
        color: #24EE81; // 원하는 색상으로 변경
    }

    &:hover {
        color: #24EE81; // 원하는 색상으로 변경
    }
`;
const Login = styled.nav`
    ul{
        display: flex;
    gap: 101px;
    list-style: none;
    font-weight: normal;
    font-size: 20px;
    padding: 0;
    margin: 0;
    margin-right: 100px;
    cursor:pointer;
    
}
li{
    &.active {
        color: #24EE81; // 원하는 색상으로 변경
    }

    &:hover {
        color: #24EE81; // 원하는 색상으로 변경
    }
}
 
`

export default NavBar;
