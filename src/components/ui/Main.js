import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ContentContainer from './ContentContainer';
import NavBar from './NavBar';

import theme from '../../styles/theme';

const MainWrapper =  styled.div`
  background: ${theme.colors.offWhite};
  display: flex;
  max-width: 100vw;
  min-height: calc(100vh - ${theme.headerHeight});
`;

const Main = ({ isAdmin, pathName, children }) => (
  <MainWrapper>
    {isAdmin ? <NavBar pathName={pathName}/> : undefined}
    <ContentContainer>
      {children}
    </ContentContainer>
  </MainWrapper>
);

const mapStateToProps = state => ({
  isAdmin: state.user.user.userType === 'admin'
})

export default connect(mapStateToProps)(Main);
