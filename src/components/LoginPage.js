import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { startLogin } from '../actions/auth';

import Background from './ui/Background';
import BoxLayout from './ui/BoxLayout';
import Button from './ui/Button';

import theme from '../styles/theme';

const BoxTitle = styled.h1`
  line-height: 1;
  margin: 0 0 ${theme.spacing.m} 0;
`;

export const LoginPage = ({ startLogin }) => (
  <Background >
    <BoxLayout>
      <BoxTitle>
        <img 
          src="https://static.wixstatic.com/media/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png/v1/crop/x_62,y_139,w_988,h_366/fill/w_480,h_164,al_c,usm_0.66_1.00_0.01/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png"
          alt="Bik'box"
          width="220px"
        />
      </BoxTitle>
      <p>Console d'administration</p>
      <Button onClick={startLogin}>Se Connecter</Button>
    </BoxLayout>
  </Background>
);

export default connect(undefined, { startLogin })(LoginPage);
