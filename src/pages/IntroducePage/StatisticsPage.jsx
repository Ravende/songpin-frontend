import Background from "../../components/IntroducePage/Background";
import NavBar from "../../components/IntroducePage/NavBar";
import StatBackground2 from "../../components/IntroducePage/StatBackground2";
import styled from "styled-components";
const StatisticsPage=()=>{
return<div>

    <NavBar/>

    <BackgroundWrapper><StatBackground2/> 
</BackgroundWrapper>

</div>
}
const BackgroundWrapper=styled.div`

`
const Wrapper = styled.div`
    position:relative;
    z-index: 1;
`
export default StatisticsPage;