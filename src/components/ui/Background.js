import React from 'react';
import styled from 'styled-components';

import theme from '../../styles/theme';

const Wrapper = styled.div`
  align-items: center;
  background-size: cover;
  background: url('https://static.wixstatic.com/media/3aaac2_0de65d1fe7e9478680611613951d5bb2~mv2_d_1920_1345_s_2.jpg/v1/fill/w_1920,h_924,al_t,q_85/3aaac2_0de65d1fe7e9478680611613951d5bb2~mv2_d_1920_1345_s_2.jpg') no-repeat center;
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
