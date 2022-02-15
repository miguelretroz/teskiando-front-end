import React from 'react';

import { CommonRoutes, UserRoutes } from './routes';

import './styles/generic/font.css';

import { generic } from './styles';

function App() {
  return (
    <>
      <generic.Reset />
      <CommonRoutes />
      <UserRoutes />
    </>
  );
}

export default App;
