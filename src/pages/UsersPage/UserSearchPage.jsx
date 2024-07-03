import React from 'react';
import styled from 'styled-components';
import UserSideSection from '../../components/UsersPage/UserSideSection';

const UserSearchPage = () => {
  return (
    <UserSearchContainer>
      <UserSideSection />
    </UserSearchContainer>
  );
};

export default UserSearchPage;

const UserSearchContainer = styled.div``;

const Content = styled.div`
  margin: 33px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;
