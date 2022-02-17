import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { CommonRoutes, UserRoutes } from './routes';

import './styles/generic/font.css';

import { generic } from './styles';

function App() {
  return (
    <>
      <generic.Reset />
      <Routes>
        <Route exact path="/" element={ <Navigate to="/login" /> } />
        { CommonRoutes() }
        { UserRoutes() }
      </Routes>
    </>
  );
}

export default App;
