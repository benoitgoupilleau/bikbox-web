import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { startLogout } from '../../actions/auth';
import { toggleNavBar } from '../../actions/user';

import theme from '../../styles/theme';

const StyledHeader = styled.header`
  background: ${theme.colors.brandPrimary};
  height: ${theme.headerHeight};
  padding: 0 ${theme.spacing.m};
`;

const HeaderContent = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  padding: ${theme.spacing.s} 0 0 0;
`;

const HeaderTitle =  styled(Link)`
  color: ${theme.colors.defaultColor};
  text-decoration: none;
  h1 {
    margin: 0;
    img {
      width: 18rem;
    }
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

const NavToggle = styled.div`
  cursor: pointer;
  img {
    height: 2rem;
    width: 2rem;
  }

  @media(min-width: 50rem){
    display: none;
  };
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
`;

export const Header = ({ startLogout, isNavOpen, toggleNavBar }) => {
  const navImageSrc = isNavOpen ? '/images/x.svg' : '/images/bars.svg';
  return (
  <StyledHeader>
      <HeaderContent >
        <LeftContent>
          <NavToggle>
            <img src={navImageSrc} onClick={toggleNavBar} />
          </NavToggle>
          <HeaderTitle to="/dashboard">
            <h1>
              <img
                src="https://static.wixstatic.com/media/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png/v1/crop/x_62,y_139,w_988,h_366/fill/w_480,h_164,al_c,usm_0.66_1.00_0.01/078127_6d46d897f14149ab9de07f4a1b1295c7~mv2.png"
                alt="Bik'box"
                width="50%"
              />
            </h1>
          </HeaderTitle>
        </LeftContent>
        <LinkButton onClick={startLogout}>Déconnexion</LinkButton>
      </HeaderContent>
  </StyledHeader>
  );
}

const mapStateToProps = state => ({
  isNavOpen: state.user.isNavOpen
})

export default connect(mapStateToProps, { startLogout, toggleNavBar })(Header);
