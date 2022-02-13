import React from 'react';

import { CommonRoutes } from './routes';

import './styles/generic/font.css';

import { generic } from './styles';

function App() {
  return (
    <>
      <generic.Reset />
      <CommonRoutes />
    </>
  );
}

export default App;
