import React from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  user,
} from '../pages';

function UserRoutes() {
  return (
    <Routes>
      <Route exact path="/tasks" element={ <user.Tasks /> } />
    </Routes>
  );
}

export default UserRoutes;
