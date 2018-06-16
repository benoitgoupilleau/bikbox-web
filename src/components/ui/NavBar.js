import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { toggleNavBar } from '../../actions/user';
import theme from '../../styles/theme';

const SideBar = styled.div`
  display: flex;
  transition: all .3s ease;
  width: 100vw;

  position: fixed;
  top: ${theme.headerHeight};
  left:${props => (props.isNavOpen ? '0' : '-100vw')};
  bottom:0;
  z-index: 1;

  @media(min-width: 50rem){
    display: flex;
    position: static;
    width: 20rem;
  }

`;

const Wrapper = styled.div`
  color: ${theme.colors.brandPrimary};
  background: ${theme.colors.defaultColor};
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SyledLink = styled(Link)`
  text-decoration: none;
  color: ${theme.colors.brandPrimary};
  width: 100%;
  padding: ${theme.spacing.s} ${theme.spacing.m};
  border-bottom: 1px solid ${theme.colors.offWhite};

  &.isSelected {
    background: ${theme.colors.offWhite};
  }
`;


const NavBar = ({ pathName, isNavOpen, toggleNavBar }) => (
  <SideBar isNavOpen={isNavOpen} >
    <Wrapper>
      <SyledLink to='/dashboard' className={pathName === '/dashboard' ? 'isSelected' : ''} onClick={toggleNavBar}>
        <i className="fas fa-columns" /> Dashboard
      </SyledLink>
      <SyledLink to='/alerts' className={pathName === '/alerts' ? 'isSelected' : ''} onClick={toggleNavBar}>
        <i className="far fa-bell" /> Alertes
      </SyledLink>
      <SyledLink to='/admin' className={pathName === '/admin' ? 'isSelected' : ''} onClick={toggleNavBar}>
        <i className="fas fa-lock" /> Admin
      </SyledLink>
    </Wrapper>
  </SideBar>
);

const mapStateToProps = state => ({
  isNavOpen: state.user.isNavOpen
})

export default connect(mapStateToProps, { toggleNavBar })(NavBar);
