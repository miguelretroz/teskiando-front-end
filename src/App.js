import React from 'react';
import { Routes } from 'react-router-dom';

import { CommonRoutes, UserRoutes } from './routes';

import './styles/generic/font.css';

import { generic } from './styles';

function App() {
  return (
    <>
      <generic.Reset />
      <Routes>
        { CommonRoutes() }
        { UserRoutes() }
      </Routes>
    </>
  );
}

export default App;
