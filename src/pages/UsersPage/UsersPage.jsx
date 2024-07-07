import React from 'react';
import styled from 'styled-components';
import UserSideSection from '../../components/UsersPage/UserSideSection';

const UsersPage = () => {
  return (
    <UsersPageContainer>
      <UserSideSection />
    </UsersPageContainer>
  );
};

export default UsersPage;

const UsersPageContainer = styled.div``;

const Content = styled.div`
  margin: 33px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;
