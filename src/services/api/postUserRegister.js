import { USERS_REGISTER } from './endpoints';
import { fetchWithBody } from './fetchs';

export default async (
  body,
  setError,
  redirect,
  // setIsLoading,
) => {
  try {
    await fetchWithBody('post', USERS_REGISTER, body);
    if (redirect) redirect();
  } catch ({ response }) {
    if (response.data) {
      const { message } = response.data;
      let key = '';
      if (message.includes('Nome')) key = 'name';
      else if (message.includes('Email')) key = 'email';
      else if (message.includes('Senha')) key = 'password';
      setError(key, { type: 'api', message });
    }
    // setIsLoading(false);
  }
};
