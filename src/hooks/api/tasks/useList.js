import { useQuery } from 'react-query';
import { api } from 'services';

const queryFn = async () => {
  const { data: { tasks } } = await api.fetchs.fetch('get', api.endpoints.TASK_LIST);
  return tasks;
};

export default () => useQuery('tasks', queryFn);
