import { USER_REGISTER } from '../endpoints';
import { fetchWithBody } from '../fetchs';

export const mutationFn = (
  { name, email, password },
) => fetchWithBody('post', USER_REGISTER, { name, email, password });

export const onSuccess = (_, { redirect }) => {
  if (redirect) redirect();
};

export const onError = (error, { setError }) => {
  if (error.response) {
    const { message } = error.response.data;
    let key = '';
    if (message.includes('Nome')) key = 'name';
    else if (message.includes('Email')) key = 'email';
    else if (message.includes('Senha')) key = 'password';
    setError(key, { type: 'api', message });
  }
};
export default {
  mutationFn,
  onSuccess,
  onError,
};
