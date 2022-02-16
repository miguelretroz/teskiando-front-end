import { TASK_REMOVE } from '../endpoints';
import { fetch } from '../fetchs';

export default async (
  taskId,
  removeTask,
) => {
  try {
    await fetch(
      'delete',
      `${TASK_REMOVE}${taskId}`,
    );
    removeTask(taskId);
  } catch ({ response }) {
    console.log(response);
  }
};
