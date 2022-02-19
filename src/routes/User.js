import React from 'react';
import { Route } from 'react-router-dom';

import {
  user,
} from '../pages';

function UserRoutes() {
  return (
    <Route exact path="/tasks" element={ <user.Tasks /> } />
  );
}

export default UserRoutes;
