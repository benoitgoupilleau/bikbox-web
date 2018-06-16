import React from 'react';

import Main from './ui/Main';


const AdminPage = (props) => (
  <Main pathName={props.location.pathname} >
    Admin page
  </Main>
);

export default AdminPage;
