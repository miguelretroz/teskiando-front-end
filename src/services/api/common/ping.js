import { PING } from '../endpoints';
import { fetch } from '../fetchs';

export const queryFn = () => fetch('get', PING);

export default {
  queryKey: 'ping',
  queryFn,
  staleTime: 1800000,
};
