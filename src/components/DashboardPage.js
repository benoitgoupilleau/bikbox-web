import React from 'react';

import Main from './ui/Main';

const DashboardPage = (props) => (
  <Main pathName={props.location.pathname} >
    DashBoard
  </Main>
);

export default DashboardPage;
