import NavBar from "../../components/IntroducePage/NavBar";
import main_center from "../../assets/introduce/main_center.svg";
import main_bottom from "../../assets/introduce/main_bottom.svg";
import styled from "styled-components";
import Background from "../../components/IntroducePage/Background";

const Main = ()=>{
return<>
<BackgroundWrapper>
  <Background />
</BackgroundWrapper>

<Wrapper>
  <NavBar />
  <Center>
    <img src={main_center} alt="main center" />
  </Center>
  <Bottom>
    <img src={main_bottom} alt="main bottom" />
  </Bottom>
</Wrapper>
</>
}

const BackgroundWrapper = styled.div`
    position:absolute;
    width: 100%;
    height:100%;
    top:0;
    left:0;
    z-index: 0;
`
const Wrapper = styled.div`
    position:relative;
    z-index: 1;
`
const Center = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top:-40px;
 
 

`
const Bottom = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    
 
`


export default Main;
