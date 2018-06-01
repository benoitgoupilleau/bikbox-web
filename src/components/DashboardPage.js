import React from 'react';
import styled from 'styled-components';

import ContentContainer from './ui/ContentContainer';

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

const DashboardPage = () => (
  <Dashboard>
    <PageHeader>
      <ContentContainer>
        <PageHeaderTitle>To be continued...</PageHeaderTitle>
      </ContentContainer>
    </PageHeader>
  </Dashboard>
);

export default DashboardPage;
