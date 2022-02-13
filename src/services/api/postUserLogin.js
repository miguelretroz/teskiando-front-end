import { USER_LOGIN } from './endpoints';
import { fetchWithBody } from './fetchs';

export default async (
  body,
  setError,
  redirect,
  // setIsLoading,
) => {
  try {
    await fetchWithBody('post', USER_LOGIN, body, true);
    if (redirect) redirect();
  } catch ({ response }) {
    if (response.data) {
      const { message } = response.data;
      let key = '';
      if (message.includes('Email')) key = 'email';
      else if (message.includes('Senha')) key = 'password';
      setError(key, { type: 'api', message });
    }
    // setIsLoading(false);
  }
};
