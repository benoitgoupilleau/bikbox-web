import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';

const Wrapper = styled.div`
  align-items: center;
  background-size: cover;
  background: url('images/background.webp') no-repeat center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
  -webkit-background-size: cover;
`;

const Background = (props) => (
  <Wrapper>
    {props.children}
  </Wrapper>
)

export default Background;
