import { useMutation, useQueryClient } from 'react-query';

import { api } from 'services';

const mutationFn = async ({ taskId, newData }) => {
  const { data: { task } } = await api.fetchs.fetchWithBody(
    'put',
    `${api.endpoints.TASK_EDIT}${taskId}`,
    newData,
  );
  return task;
};

export default () => {
  const queryClient = useQueryClient();

  return useMutation(
    mutationFn,
    {
      onSuccess: (updatedTask) => {
        queryClient.setQueryData(
          'tasks',
          (oldQueryData) => oldQueryData.map(
            (oldDataTask) => (
              (oldDataTask.id === updatedTask.id) ? updatedTask : oldDataTask
            ),
          ),
        );
      },
    },
  );
};
