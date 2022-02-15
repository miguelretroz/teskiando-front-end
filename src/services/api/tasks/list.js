import { TASK_LIST } from '../endpoints';
import { fetch } from '../fetchs';

export default async (
  setTasksList,
) => {
  try {
    const { data: { tasks } } = await fetch('get', TASK_LIST);
    setTasksList(tasks);
  } catch ({ response }) {
    console.log(response);
  }
};
