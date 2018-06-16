import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 80rem;
  padding: ${theme.spacing.l} ${theme.spacing.m};
`;

const ContentContainer = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
)

export default ContentContainer;
