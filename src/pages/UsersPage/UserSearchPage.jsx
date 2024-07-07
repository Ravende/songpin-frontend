import React from 'react';
import styled from 'styled-components';
import UserSearchSideSection from '../../components/UsersPage/UserSearchSideSection';

const UserSearchPage = () => {
  return (
    <UserSearchContainer>
      <UserSearchSideSection />
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
