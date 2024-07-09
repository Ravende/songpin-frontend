import statisticsIcon1 from '../../assets/introduce/statisticsIcon1.svg';
import styled from 'styled-components';
const StatBackground1 = () => {
  return (
    <>
      <Second>
        <First>
          <img src={statisticsIcon1} />
          <img src={statisticsIcon1} />
        </First>
        <First>
          <img src={statisticsIcon1} />
          <img src={statisticsIcon1} />
        </First>
        <First>
          <img src={statisticsIcon1} />
          <img src={statisticsIcon1} />
        </First>
      </Second>
    </>
  );
};
const First = styled.div`
  display: flex;
  gap: 800px;
  justify-content: center;
`;
const Second = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1300px;
  justify-content: center;
  align-items: center;
`;
export default StatBackground1;
