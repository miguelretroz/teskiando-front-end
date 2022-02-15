import axios from 'axios';

export const fetch = (method, endpoint, withCredentials) => axios[method](
  endpoint, { withCredentials },
);

export const fetchWithBody = (method, endpoint, body, withCredentials) => axios[method](
  endpoint, body, { withCredentials },
);
export const fetchWithToken = (method, endpoint, token, withCredentials) => axios[method](
  endpoint,
  {
    headers: { Authorization: token },
    withCredentials,
  },
);
export const fetchWithTokenAndBody = (
  method,
  endpoint,
  token,
  body,
  withCredentials,
) => axios[method](
  endpoint,
  body,
  {
    headers: { Authorization: token },
    withCredentials,
  },
);
