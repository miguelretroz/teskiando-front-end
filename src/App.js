import React from 'react';
import Router from './routes';

import './styles/generic/font.css';

import { generic } from './styles';

function App() {
  return (
    <>
      <generic.Reset />
      <Router />
    </>
  );
}

export default App;
