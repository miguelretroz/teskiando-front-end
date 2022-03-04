import { USER_LOGIN } from '../endpoints';
import { fetchWithBody } from '../fetchs';

export const mutationFn = async ({ email, password }) => {
  const { data } = await fetchWithBody('post', USER_LOGIN, { email, password }, true);
  return data;
};

export const onSuccess = ({ token }, { redirect }) => {
  localStorage.setItem('accessToken', JSON.stringify(token));
  if (redirect) redirect();
};

export const onError = (error, { setError }) => {
  if (error.response) {
    const { message } = error.response.data;
    let key = '';
    if (message.includes('Email') || message.includes('Usuário')) key = 'email';
    else if (message.includes('Senha')) key = 'password';
    setError(key, { type: 'api', message });
  }
};

export default {
  mutationFn,
  onSuccess,
  onError,
};
