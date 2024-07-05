import React, { useState } from 'react';
import styled from 'styled-components';

const SideSection = () => {
  return (
    <SideComponent>
      <SideBar></SideBar>
      <SideBox>
        <Content></Content>
      </SideBox>
    </SideComponent>
  );
};

export default SideSection;

const SideComponent = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  align-items: stretch;
`;

const SideBar = styled.div`
  width: 80px;
  border-right: 1px solid var(--gray, #bcbcbc);
  flex-shrink: 0;
`;

const SideBox = styled.div`
  width: 528px;
  border-right: 1px solid var(--gray, #bcbcbc);
  padding-top: 40px;
  flex-shrink: 0;
  flex-grow: 1;
  height: 100%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  overflow-y: auto;
`;
