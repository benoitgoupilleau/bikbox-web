import React from 'react';
import styled from 'styled-components';

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
  <Loader className="loader">
    <LoaderImg src="images/loader.gif" alt="Loading" />
  </Loader>
);

export default LoadingPage;
