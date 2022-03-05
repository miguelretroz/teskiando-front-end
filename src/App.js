import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import Router from 'routes';

import 'styles/generic/font.css';
import { generic } from 'styles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
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
