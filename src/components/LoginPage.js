import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { startLogin } from '../actions/auth';

import theme from '../styles/theme';

const Wrapper = styled.div`
  align-items: center;
  background-size: cover;
  background: url('https://static.wixstatic.com/media/3aaac2_0de65d1fe7e9478680611613951d5bb2~mv2_d_1920_1345_s_2.jpg/v1/fill/w_1920,h_1148,al_t,q_90/3aaac2_0de65d1fe7e9478680611613951d5bb2~mv2_d_1920_1345_s_2.webp') no-repeat center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
  -webkit-background-size: cover;
`;

const BoxLayout = styled.div`
  background: ${theme.colors.brandPrimary};
  border-radius: 3px;
  opacity: 0.85;
  padding: ${theme.spacing.l} ${theme.spacing.m};
  text-align: center;
  width: 25rem;
`;

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
  <Wrapper >
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
  </Wrapper>
);

export default connect(undefined, { startLogin })(LoginPage);
