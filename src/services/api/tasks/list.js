import { TASK_LIST } from '../endpoints';
import { fetchWithToken } from '../fetchs';

export default async (
  setTasksList,
  token,
) => {
  try {
    console.log(token);
    const { data: { tasks } } = await fetchWithToken('get', TASK_LIST, token);
    setTasksList(tasks);
  } catch ({ response }) {
    console.log(response);
  }
};
