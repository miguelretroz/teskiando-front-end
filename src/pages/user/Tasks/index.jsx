import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Input } from '../../../components';
import { taskSchemas } from '../../../schemas';
import { api } from '../../../services';

function Tasks() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(taskSchemas.create) });

  const onSubmit = async ({ task }) => {
    await api.tasks.register(
      { title: task },
      (taskCreated) => console.log(taskCreated),
    );
    reset({ task: '' });
  };

  return (
    <header>
      <h1>User Name</h1>
      <form onSubmit={ handleSubmit(onSubmit) }>
        <Input
          placeholder="Adicionar nova tarefa"
          name="task"
          type="text"
          maxLength="51"
          register={ register }
          displayWarning={ errors.task }
          warningMessage={ errors.task?.message }
        />
        <button type="submit">+</button>
      </form>
    </header>
  );
}

export default Tasks;
