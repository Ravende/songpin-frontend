import React from 'react';
import styled from 'styled-components';
import UserFollowInfo from './UserFollowInfo';
const FollowList = ({ selectedMenu }) => {
  return (
    <ListContainer>
      {/* <ListTitle>{selectedMenu === 'followers' ? '팔로워 목록' : '팔로잉 목록'}</ListTitle> */}
      {/* 여기에서 해당 메뉴의 리스트를 렌더링합니다. */}
      <ContentBox>
        <UserFollowInfo />
      </ContentBox>
    </ListContainer>
  );
};

export default FollowList;

const ListContainer = styled.div``;

const ContentBox = styled.div`
  padding: 33px;
  padding-top: 40px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--gray, #bcbcbc);
`;
