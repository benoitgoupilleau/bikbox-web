import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';

const Wrapper = styled.button`
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

const Button = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
)

export default Button;
