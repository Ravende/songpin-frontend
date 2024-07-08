import statisticsIcon2 from '../../assets/introduce/statisticsIcon2.svg'
import styled from 'styled-components'

const StatBackground2=()=>{
return <>
<Third>
    <Second>
    <First>
    <img src={statisticsIcon2}/>
    <img src={statisticsIcon2}/>
    </First>
    <First>
    <img src={statisticsIcon2}/>
    <img src={statisticsIcon2}/>
    </First>
    </Second>
    <Second>
    <First>
    <img src={statisticsIcon2}/>
    <img src={statisticsIcon2}/>
    </First>
    <First>
    <img src={statisticsIcon2}/>
    <img src={statisticsIcon2}/>
    </First>
    </Second>
    <Second>
    <First>
    <img src={statisticsIcon2}/>
    <img src={statisticsIcon2}/>
    </First>
    <First>
    <img src={statisticsIcon2}/>
    <img src={statisticsIcon2}/>
    </First>
    </Second>
    </Third>
</>
}
const First = styled.div`
    display: flex;
    gap:728px;
    justify-content: center;
`
const Second = styled.div`
    display: flex;
    flex-direction: column;
    gap:447px;
`
const Third = styled.div`
    display:flex;
    flex-direction: column;
    gap:1020px;
    margin-top:39px;
    margin-bottom:851px;
`
export default StatBackground2;