import React from 'react';
import { Route } from 'react-router-dom';

import {
  common,
} from 'pages';

function CommonRoutes() {
  return (
    <>
      <Route exact path="/register" element={ <common.Register /> } />
      <Route exact path="/login" element={ <common.Login /> } />
    </>
  );
}

export default CommonRoutes;
