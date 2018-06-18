import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';

const Wrapper = styled.div`
  color: ${theme.colors.brandPrimary};
  margin: ${theme.spacing.l} ${theme.spacing.m};
  width: 100%;
`;

const ContentContainer = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
)

export default ContentContainer;
