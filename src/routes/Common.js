import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  common,
} from '../pages';

function CommonRoutes() {
  return (
    <Routes>
      <Route exact path="/register" element={ <common.Register /> } />
    </Routes>
  );
}

export default CommonRoutes;
