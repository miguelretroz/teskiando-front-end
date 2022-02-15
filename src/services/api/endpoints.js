import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3001';

export const USER_REGISTER = '/user/register';
export const USER_LOGIN = '/user/login';

export default {
  USER_REGISTER,
  USER_LOGIN,
};
