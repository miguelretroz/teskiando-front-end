import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './routes';

import './styles/generic/font.css';

import { generic } from './styles';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={ queryClient }>
      <generic.Reset />
      <Router />
    </QueryClientProvider>
  );
}

export default App;
