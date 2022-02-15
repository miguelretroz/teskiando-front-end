import { TASK_REGISTER } from '../endpoints';
import { fetchWithBody } from '../fetchs';

export default async (
  body,
  setTask,
  setError,
) => {
  try {
    const { data: { task } } = await fetchWithBody('post', TASK_REGISTER, body);
    setTask(task);
  } catch ({ response }) {
    if (response.data) {
      setError('task', { type: 'api', message: 'Tente novamente' });
    }
  }
};
