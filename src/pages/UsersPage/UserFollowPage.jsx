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
