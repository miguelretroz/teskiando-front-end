import { TASK_EDIT } from '../endpoints';
import { fetchWithBody } from '../fetchs';

export default async (
  taskId,
  newData,
  setTask,
) => {
  try {
    const { data: { task } } = await fetchWithBody(
      'put',
      `${TASK_EDIT}${taskId}`,
      newData,
    );
    setTask(task);
  } catch ({ response }) {
    console.log(response);
  }
};
