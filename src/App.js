import React from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Router from 'routes';

import 'styles/generic/font.css';
import { generic } from 'styles';

function App() {
  useQuery('accessToken', () => JSON.parse(localStorage.getItem('accessToken')));

  return (
    <>
      <generic.Reset />
      <Router />
      {
        process.env.NODE_ENV === 'development'
          && <ReactQueryDevtools initialIsOpen={ false } />
      }
    </>
  );
}

export default App;
