import React from 'react';
import styled from 'styled-components';
import userLogoPop from '../../assets/images/MyPage/user-logo-pop.svg'; //임시 유저 프로필
import SideSection from '../../components/common/SideSection';
import { useNavigate } from 'react-router-dom';

const ProfileEditPage = () => {
  const navigate = useNavigate();

  const goBackPage = () => {
    navigate('/mypage');
  };

  return (
    <SideSection>
      <ProfileEditComponent>
        <UserLogo src={userLogoPop} />
        <EditSection>
          <NickName>
            <Title>닉네임</Title>
            <Edit>
              <EditText>송핀</EditText>
              <Line />
              <AlarmMessage>닉네임은 8자 이내로 작성해주세요.</AlarmMessage>
            </Edit>
          </NickName>
          <Handle>
            <Title>핸들</Title>
            <Edit>
              <EditText>songp1n</EditText>
              <Line />
              <AlarmMessage>이미 사용 중인 핸들입니다.</AlarmMessage>
            </Edit>
          </Handle>
          <Email>
            <Title>이메일</Title>
            <MailText>songpin@gmail.com</MailText>
          </Email>
        </EditSection>
        <Spacer />
        <GoOutBtns>
          <Button onClick={goBackPage}>취소</Button>
          <Button onClick={goBackPage}>완료</Button>
        </GoOutBtns>
      </ProfileEditComponent>
    </SideSection>
  );
};

export default ProfileEditPage;

const ProfileEditComponent = styled.div`
  padding: 0 45px 0 35px;
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: space-between;
`;

const UserLogo = styled.img`
  padding-top: 48px;
  width: 60px;
  height: 60px;
  flex-shrink: 0;
`;

const EditSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 56px;
`;

const NickName = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Title = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const Edit = styled.div`
  display: flex;
  flex-direction: column;
`;

const EditText = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
`;

const Line = styled.div`
  width: 340px;
  height: 1px;
  background: var(--gray02, #747474);
`;

const AlarmMessage = styled.div`
  color: var(--gray02, #747474);
  text-align: right;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const Handle = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 73px; */
  padding-top: 28px;
  justify-content: space-between;
`;

const Email = styled.div`
  display: flex;
  flex-direction: row;
  gap: 56px;
  padding-top: 35px;
`;

const MailText = styled.div`
  color: var(--gray02, #747474);
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
`;

const Spacer = styled.div`
  flex-grow: 1;
`;

const GoOutBtns = styled.div`
  display: flex;
  flex-direction: row;
  gap: 48px;
  justify-content: flex-end;
  align-items: flex-end;
  padding-bottom: 57px;
`;

const Button = styled.div`
  color: var(--light_black, #232323);
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 28px */
  cursor: pointer;
`;
