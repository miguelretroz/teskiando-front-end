import { useMutation, useQueryClient } from 'react-query';
import axios from 'axios';

import { USER_LOGIN } from 'services/api/endpoints';
import { fetchWithBody } from 'services/api/fetchs';

const mutationFn = async ({ email, password }) => {
  const { data } = await fetchWithBody('post', USER_LOGIN, { email, password }, true);
  return data;
};

export default (redirect, setError) => {
  const queryClient = useQueryClient();

  return useMutation(mutationFn, {
    onSuccess: ({ token }) => {
      queryClient.setQueryData('accessToken', token);
      localStorage.setItem('accessToken', JSON.stringify(token));
      axios.defaults.headers.common.Authorization = `Bearer ${token}`;

      if (redirect) redirect();
    },
    onError: (error) => {
      if (error.response) {
        const { message } = error.response.data;
        let key = '';
        if (message.includes('Email') || message.includes('Usuário')) key = 'email';
        else if (message.includes('Senha')) key = 'password';
        setError(key, { type: 'api', message });
      }
    },
  });
};
