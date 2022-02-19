import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import CommonRoutes from './Common';
import UserRoutes from './User';

export default function Router() {
  return (
    <Routes>
      <Route exact path="/" element={ <Navigate to="/login" /> } />
      { CommonRoutes() }
      { UserRoutes() }
    </Routes>
  );
}

export { default as utils } from './utils';
export { default as CommonRoutes } from './Common';
export { default as UserRoutes } from './User';
