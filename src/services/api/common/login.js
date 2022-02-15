import axios from 'axios';

import { USER_LOGIN } from '../endpoints';
import { fetchWithBody } from '../fetchs';

export default async (
  body,
  setError,
  redirect,
  // setIsLoading,
) => {
  try {
    const { data: { token } } = await fetchWithBody('post', USER_LOGIN, body, true);
    localStorage.setItem('accessToken', JSON.stringify(token));
    axios.defaults.headers.common.Authorization = token;
    if (redirect) redirect();
  } catch ({ response }) {
    if (response.data) {
      const { message } = response.data;
      let key = '';
      if (message.includes('Email') || message.includes('Usuário')) key = 'email';
      else if (message.includes('Senha')) key = 'password';
      setError(key, { type: 'api', message });
    }
    // setIsLoading(false);
  }
};
