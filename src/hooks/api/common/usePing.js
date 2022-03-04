import { useQuery } from 'react-query';

import { api } from 'services';

const queryFn = async () => {
  const { data } = await api.fetchs.fetch('get', api.endpoints.PING);
  return data;
};

export default () => useQuery('ping', queryFn, { staleTime: 1800000 });
