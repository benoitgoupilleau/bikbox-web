import React from 'react';
import styled from 'styled-components';

import ContentContainer from './ContentContainer';
import NavBar from './NavBar';

import theme from '../../styles/theme';

const MainWrapper =  styled.div`
  background: ${theme.colors.offWhite};
  height: calc(100vh - ${theme.headerHeight});
  display: flex;
`;

const Main = ({ pathName, children }) => (
  <MainWrapper>
    <NavBar pathName={pathName}/>
    <ContentContainer>
      {children}
    </ContentContainer>
  </MainWrapper>
);

export default Main;
