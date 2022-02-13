import axios from 'axios';

export const fetchWithBody = (method, endpoint, body) => axios[method](endpoint, body);
export const fetchWithToken = (method, endpoint, token) => axios[method](
  endpoint,
  { headers: { Authorization: token } },
);
export const fetchWithTokenAndBody = (method, endpoint, token, body) => axios[method](
  endpoint,
  body,
  { headers: { Authorization: token } },
);
