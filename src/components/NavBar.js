import React from 'react';
import styled from 'styled-components';

import theme from '../styles/theme';

const Wrapper = styled.div`
  color: ${theme.colors.brandPrimary};
  background: ${theme.colors.brandTertiary};
`;


class NavBar extends React.Component {
  render(){
    return (
      <Wrapper>Hello</Wrapper>
    );
  }
};

export default NavBar;
