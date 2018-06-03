import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';

const Wrapper = styled.div`
  background: ${theme.colors.brandPrimary};
  border-radius: 3px;
  opacity: 0.95;
  padding: ${theme.spacing.l} ${theme.spacing.m};
  text-align: center;
`;

const BoxLayout = ({ width = '25rem', children}) => (
  <Wrapper style={{width}}>
    {children}
  </Wrapper>
)

export default BoxLayout;
