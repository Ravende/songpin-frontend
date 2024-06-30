import styled from "styled-components";
const NavBar = () => {
    return<>
    <div>
        <Navbar>
        <ul className="nav_menu"><li >메인</li><li>서비스 소개</li><li>통계</li></ul>
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
    ul{
        display:flex;
        gap:101px;
        list-style:none;
        font-weight : bold;
        font-size:24px;
        padding: 0;
        margin:0;
        margin-left: 100px;

    }
   
`
const Login = styled.nav`
    ul{
        font-weight: normal;
        font-size:20px;
        margin-right: 100px;
    }
`

export default NavBar;
