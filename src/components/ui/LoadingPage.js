import React from 'react';
import styled from 'styled-components';

import Background from './Background';


const Loader = styled.div`
  align-items: center;
  background: transparent;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

const LoaderImg = styled.img`
  height: 6rem;
  width: 6rem;
`;

const LoadingPage = () => (
  <Background>
    <Loader>
      <LoaderImg src="/images/loader.gif" alt="Loading" />
    </Loader>
  </Background>
);

export default LoadingPage;
