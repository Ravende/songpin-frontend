import React from 'react';
import styled from 'styled-components';
import userLogoPop from '../../assets/images/MyPage/user-logo-pop.svg'; //임시 유저 프로필
import SideSection from '../../components/common/SideSection';

const ProfileEditPage = () => {
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
            </Edit>
          </NickName>
        </EditSection>
      </ProfileEditComponent>
    </SideSection>
  );
};

export default ProfileEditPage;

const ProfileEditComponent = styled.div`
  padding: 8px 45px 0 35px;
`;

const UserLogo = styled.img`
  width: 60px;
  height: 60px;
  flex-shrink: 0;
`;

const EditSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 52px;
`;

const NickName = styled.div`
  display: flex;
  flex-direction: row;
  gap: 56px;
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
