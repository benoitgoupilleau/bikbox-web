import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ContentContainer from './ContentContainer';
import NavBar from './NavBar';

import theme from '../../styles/theme';

const MainWrapper =  styled.div`
  background: ${theme.colors.offWhite};
  height: calc(100vh - ${theme.headerHeight});
  display: flex;
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
  isAdmin: state.auth.user.userType === 'admin'
})

export default connect(mapStateToProps)(Main);
