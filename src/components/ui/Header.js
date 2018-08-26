import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { startLogout, toggleNavBar, selectEntity } from '../../actions/user';

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
      max-width: 18rem;
      min-width: 14rem;
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
  align-items: center;
  display: flex;
`;

const RightContent = styled.div`
  align-items: center;
  display: flex;
`;

const SelectLayout = styled.div`
  margin: 0 ${theme.spacing.s};
  position: relative;
`;

const SelectEntity = styled.select`
  background: none;
  border: none;
  color: ${theme.colors.defaultColor};
  font-size: ${theme.fonts.xlarge};
  font-weight: 300;
  min-width: 12rem;
  outline: none;
  padding-right: 2.5rem;

   /* reset */
  box-sizing: border-box;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const Selector = styled.i`
  color: ${theme.colors.defaultColor};
  pointer-events: none;
  position: absolute;
  right: 0;
`;

export const Header = ({ startLogout, isNavOpen, toggleNavBar, user, selectEntity, selectedEntity }) => {
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
        <RightContent>
          <SelectLayout>
            <SelectEntity value={selectedEntity} onChange={(e) => selectEntity(e.target.value)}>
              {user._entity.length > 0 ? user._entity.map(entity => <option key={entity._id} value={entity._id}>{entity.name}</option>) : <option value={user._entity[0]._id}>{user._entity[0].name}</option>}
            </SelectEntity>
            {user._entity.length > 0 && <Selector className="fas fa-angle-down fa-2x" />}
          </SelectLayout>
          <LinkButton onClick={startLogout}>Déconnexion</LinkButton>
        </RightContent>
      </HeaderContent>
  </StyledHeader>
  );
}

const mapStateToProps = state => ({
  isNavOpen: state.user.isNavOpen,
  user: state.user.user,
  selectedEntity: state.user.selectedEntity
})

export default connect(mapStateToProps, { startLogout, toggleNavBar, selectEntity })(Header);
