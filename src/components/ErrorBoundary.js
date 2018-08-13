import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Background from './ui/Background';
import BoxLayout from './ui/BoxLayout';

import theme from '../styles/theme';
import Raven from '../helpers/sentry';

const BoxTitle = styled.h1`
  line-height: 1;
  margin: 0 0 ${theme.spacing.m} 0;
`;

const StyledLink = styled(Link)`
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


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    Raven.captureException(error, { extra: info });
  }

  render() {
    if (this.state.hasError) {
      return (
        <Background >
          <BoxLayout>
            <BoxTitle>
              <img
                src="https://static.wixstatic.com/media/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png/v1/crop/x_62,y_139,w_988,h_366/fill/w_480,h_164,al_c,usm_0.66_1.00_0.01/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png"
                alt="Bik'box"
                width="100%"
              />
            </BoxTitle>
            <h1>Oups - On a déraillé</h1>
            <StyledLink to="/" >Retour</StyledLink>
          </BoxLayout>
        </Background>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;