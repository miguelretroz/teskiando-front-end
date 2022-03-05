import { useMutation } from 'react-query';

import { api } from 'services';

const mutationFn = (
  { name, email, password },
) => api.fetchs.fetchWithBody(
  'post',
  api.endpoints.USER_REGISTER,
  { name, email, password },
);

export default (redirect, setError) => useMutation(
  mutationFn,
  {
    onSuccess: () => {
      if (redirect) redirect();
    },
    onError: (error) => {
      if (error.response) {
        const { message } = error.response.data;
        let key = '';
        if (message.includes('Nome')) key = 'name';
        else if (message.includes('Email')) key = 'email';
        else if (message.includes('Senha')) key = 'password';
        setError(key, { type: 'api', message });
      }
    },
  },
);
