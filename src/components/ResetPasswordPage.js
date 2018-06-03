import React from 'react';
import styled from 'styled-components';

import Background from './ui/Background';

import theme from '../styles/theme';

const BoxLayout = styled.div`
  background: ${theme.colors.brandPrimary};
  border-radius: 3px;
  opacity: 0.95;
  padding: ${theme.spacing.l} ${theme.spacing.m};
  text-align: center;
  width: 25rem;
`;

const BoxTitle = styled.h1`
  line-height: 1;
  margin: 0 0 ${theme.spacing.m} 0;
`;

export default class ResetPasswordPage extends React.Component {
  render() {
    console.log(this.props.match.params.token)
    return (
      <Background>
        <BoxLayout>
          <BoxTitle>Hello</BoxTitle>
        </BoxLayout>
      </Background>
    );
  }
}

