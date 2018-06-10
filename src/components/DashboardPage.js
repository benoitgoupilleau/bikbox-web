import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import ContentContainer from './ui/ContentContainer';
import NavBar from './NavBar';

import theme from '../styles/theme';

const Dashboard = styled.div`
  margin-bottom: ${theme.spacing.m};

  @media (min-width: ${theme.desktopBreakpoint}) {
    margin-bottom: ${theme.spacing.l};
  }
`;

const PageHeader =  styled.div`
  background: ${theme.colors.offWhite};
  margin-bottom: ${theme.spacing.l};
  padding: ${theme.spacing.l} 0;
`;

const PageHeaderTitle = styled.h1`
  color: ${theme.colors.brandPrimary};
  font-weight: 300;
  margin: 0;
`;

const SideBar = styled.div`
  display: flex;
  transition: left .3s ease;
  width: 100vw;

  position: fixed;
  top:6rem;
  left:${props => (props.isNavOpen ? '0' : '-100vw')};
  bottom:0;
  z-index: 1;

  @media(min-width: 50rem){
    display: flex;
    padding-right: ${theme.spacing.l};
    position: static;
    width: 30rem;
  }

`;

const DashboardPage = ({ isNavOpen }) => (
  <Dashboard>
    <PageHeader>
      <SideBar isNavOpen={isNavOpen} >
        <NavBar />
      </SideBar>
      <ContentContainer>
        <PageHeaderTitle>To be continued...</PageHeaderTitle>
      </ContentContainer>
    </PageHeader>
  </Dashboard>
);

const mapStateToProps = state => ({
  isNavOpen: state.user.isNavOpen
})

export default connect(mapStateToProps)(DashboardPage);
