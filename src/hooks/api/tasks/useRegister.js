import { useMutation, useQueryClient } from 'react-query';

import { api } from 'services';

const mutationFn = async ({ title }) => {
  const { data: { task } } = await api.fetchs.fetchWithBody(
    'post', api.endpoints.TASK_REGISTER, { title },
  );
  return task;
};

export default (setError) => {
  const queryClient = useQueryClient();

  return useMutation(
    mutationFn,
    {
      onSuccess: (newTaskData) => {
        queryClient.setQueryData(
          'tasks',
          (oldQueryData) => [...oldQueryData, newTaskData],
        );
      },
      onError: (error) => {
        if (error.response.data) {
          setError('task', { type: 'api', message: 'Tente novamente' });
        }
      },
    },
  );
};
