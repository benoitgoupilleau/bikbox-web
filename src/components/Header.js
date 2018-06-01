import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { startLogout } from '../actions/auth';

import ContentContainer from './ui/ContentContainer';

import theme from '../styles/theme';

const StyledHeader = styled.header`
  background: ${theme.colors.brandPrimary};
`;

const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${theme.spacing.s} 0 0 0;
`;

const HeaderTitle =  styled(Link)`
  color: ${theme.colors.defaultColor};
  text-decoration: none;
  h1 {
    margin: 0;
  }
`;

const LinkButton = styled.button`
  background: transparent;
  border-radius: 0;
  border: none;
  color: ${theme.colors.defaultColor};
  display: inline-block;
  font-size: ${theme.fonts.large};
  font-weight: 300;
  line-height: 1;
  padding: ${theme.spacing.s};
  text-decoration: none;
`;

export const Header = ({ startLogout }) => (
  <StyledHeader>
    <ContentContainer >
      <HeaderContent >
        <HeaderTitle to="/dashboard">
          <h1>
            <img
              src="https://static.wixstatic.com/media/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png/v1/crop/x_62,y_139,w_988,h_366/fill/w_480,h_164,al_c,usm_0.66_1.00_0.01/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png"
              alt="Bik'box"
              width="50%"
            />
          </h1>
        </HeaderTitle>
        <LinkButton onClick={startLogout}>Déconnexion</LinkButton>
      </HeaderContent>
    </ContentContainer>
  </StyledHeader>
);

export default connect(undefined, { startLogout })(Header);
