import React from 'react';
import styled from 'styled-components';
import UserFollowSideSection from '../../components/UsersPage/UserFollowSideSection';

const UserFollowPage = () => {
  return (
    <UserFollowContainer>
      <UserFollowSideSection />
    </UserFollowContainer>
  );
};

export default UserFollowPage;

const UserFollowContainer = styled.div``;

const Content = styled.div`
  margin: 33px;
  padding-top: 40px;
  display: flex;
  flex-direction: column;
`;
