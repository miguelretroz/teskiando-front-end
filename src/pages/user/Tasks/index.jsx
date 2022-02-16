import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

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
  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('accessToken'));
    const { name, email } = jwtDecode(token);
    setUser({ name, email });
    axios.defaults.headers.common.Authorization = token;
    api.tasks.list(setTasksList);
  }, []);

  const onSubmit = async ({ task }) => {
    await api.tasks.register(
      { title: task },
      (taskCreated) => setTasksList([...tasksList, taskCreated]),
    );
    reset({ task: '' });
  };

  const handleEdit = async (taskId, newData) => {
    await api.tasks.edit(
      taskId,
      newData,
      (task) => {
        const taskIndex = tasksList.findIndex(({ _id }) => taskId === _id);
        const newTasksList = [...tasksList];
        newTasksList[taskIndex] = task;
        setTasksList(newTasksList);
      },
    );
  };
  const handleRemove = async (taskId) => {
    await api.tasks.remove(
      taskId,
      () => setTasksList(tasksList.filter(({ _id }) => taskId !== _id)),
    );
  };

  return (
    <>
      <header>
        <h1>{ user.name }</h1>
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
          tasksList.map((task) => {
            const { _id } = task;
            return (<TaskCard
              key={ _id }
              { ...task }
              handleEdit={ handleEdit }
              handleRemove={ handleRemove }
            />);
          })
        }
      </main>
    </>
  );
}

export default Tasks;
