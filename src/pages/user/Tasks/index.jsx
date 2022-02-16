import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';

import { Input, TaskCard } from '../../../components';
import { taskSchemas } from '../../../schemas';
import { api } from '../../../services';

function Tasks() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(taskSchemas.create) });

  const [tasksList, setTasksList] = useState([]);

  const onSubmit = async ({ task }) => {
    await api.tasks.register(
      { title: task },
      (taskCreated) => setTasksList([...tasksList, taskCreated]),
    );
    reset({ task: '' });
  };

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('accessToken'));
    axios.defaults.headers.common.Authorization = token;
    api.tasks.list(setTasksList);
  }, []);

  return (
    <>
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
      <main>
        {
          tasksList.map(({ _id, ...taskWithoutId }) => (
            <TaskCard key={ _id } { ...taskWithoutId } />
          ))
        }
      </main>
    </>
  );
}

export default Tasks;
