import NavBar from '../../components/IntroducePage/NavBar';
import main_center from '../../assets/introduce/main_center.svg';
import styled from 'styled-components';
import Background from '../../components/IntroducePage/Background';

const IntroducePage = () => {
  return (
    <div>
      <BackgroundWrapper>
        <Background />
      </BackgroundWrapper>
      <Wrapper>
        <NavWrap>
          <NavBar />
        </NavWrap>
        <Center>
          <img src={main_center} alt="main center" />
        </Center>
        <Bottom>
          <div>
            송핀은 <br /> 이러이러한 서비스입니다.
            <br />
            <br />
            송핀은 <br /> 이러이러한 서비스입니다.
          </div>
          <div>사용방법</div>
          <div>
            만든 사람들
            <br />
            <br />
            프론트엔드 개발자
            <br />
            <br />
            백엔드 개발자
            <br />
            <br />
            디자이너{' '}
          </div>
        </Bottom>
      </Wrapper>
    </div>
  );
};

export default IntroducePage;
const NavWrap = styled.div`
  font-size: 50px;
`;

const BackgroundWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 0;
`;
const Wrapper = styled.div`
  position: relative;
`;
const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
`;
const Bottom = styled.div`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  z-index: 0;
  margin-top: 74px;
  margin-bottom: 53px;
  display: flex;
  flex-direction: column;
  gap: 336px;
`;