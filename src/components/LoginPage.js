import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { startLogin } from '../actions/auth';

import Background from './ui/Background';
import BoxLayout from './ui/BoxLayout';

import theme from '../styles/theme';

const BoxTitle = styled.h1`
  line-height: 1;
  margin: 0 0 ${theme.spacing.m} 0;
`;

const LogingButton = styled.button`
  background-color: ${theme.colors.brandSecondary};
  border-radius: 3px;
  border: none;
  color: ${theme.colors.brandPrimary};
  display: inline-block;
  font-size: ${theme.fonts.large};
  font-weight: 300;
  line-height: 1;
  opacity: 1 !important;
  padding: ${theme.spacing.s};
  text-decoration: none;
`;

export const LoginPage = ({ startLogin }) => (
  <Background >
    <BoxLayout>
      <BoxTitle>
        <img 
          src="https://static.wixstatic.com/media/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png/v1/crop/x_62,y_139,w_988,h_366/fill/w_480,h_164,al_c,usm_0.66_1.00_0.01/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png"
          alt="Bik'box"
          width="100%"
        />
      </BoxTitle>
      <p>Console d'administration</p>
      <LogingButton onClick={startLogin}>Se Connecter</LogingButton>
    </BoxLayout>
  </Background>
);

export default connect(undefined, { startLogin })(LoginPage);
