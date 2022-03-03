import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3001';
// axios.defaults.baseURL = 'https://teskiando-api.herokuapp.com';

const { REACT_APP_API_BASE_URL } = process.env;
axios.defaults.baseURL = REACT_APP_API_BASE_URL;

// Common
export const PING = '/ping';

export const USER_REGISTER = '/user/register';
export const USER_LOGIN = '/user/login';

// Tasks
export const TASK_REGISTER = '/task/register';
export const TASK_LIST = '/task/list';
export const TASK_EDIT = '/task/edit/';
export const TASK_REMOVE = '/task/remove/';

export default {
  USER_REGISTER,
  USER_LOGIN,
  TASK_REGISTER,
  TASK_LIST,
  TASK_EDIT,
  TASK_REMOVE,
  PING,
};
