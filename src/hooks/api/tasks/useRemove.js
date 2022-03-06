import { useMutation, useQueryClient } from 'react-query';

import { api } from 'services';

const mutationFn = async (taskId) => {
  await api.fetchs.fetch(
    'delete',
    `${api.endpoints.TASK_REMOVE}${taskId}`,
  );
  return taskId;
};

export default () => {
  const queryClient = useQueryClient();

  return useMutation(
    mutationFn,
    {
      onSuccess: (taskId) => {
        queryClient.setQueryData(
          'tasks',
          (oldQueryData) => oldQueryData.filter((task) => task.id !== taskId),
        );
      },
    },
  );
};
