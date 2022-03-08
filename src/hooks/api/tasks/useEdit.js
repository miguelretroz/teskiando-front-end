import { useMutation, useQueryClient } from 'react-query';

import { api } from 'services';

const mutationFn = async ({ id, newData }) => {
  const { data: { task } } = await api.fetchs.fetchWithBody(
    'put',
    `${api.endpoints.TASK_EDIT}${id}`,
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
