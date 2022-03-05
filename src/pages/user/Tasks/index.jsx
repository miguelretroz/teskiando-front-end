import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { FiUser } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import { Input, TaskCard } from 'components';
import { taskSchemas } from 'schemas';
import { api } from 'services';
import { apiHooks } from 'hooks';

import PageGlobalStyle, { Header, LogoutButton } from './style';

function Tasks() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(taskSchemas.create) });

  const [tasksList, setTasksList] = useState([]);
  const [user, setUser] = useState({ name: '', email: '' });

  const tasks = apiHooks.tasks.useList();

  useEffect(() => {
    let token = localStorage.getItem('accessToken');
    if (!token) return navigate('/login');
    token = JSON.parse(token);
    const { name, email } = jwtDecode(token);
    setUser({ name, email });
    axios.defaults.headers.common.Authorization = token;
  }, [navigate]);

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

  const handleLogout = () => {
    localStorage.clear();
    axios.defaults.headers.common.Authorization = '';
    navigate('/login');
  };

  return (
    <>
      <PageGlobalStyle />
      <Header>
        <img alt="logo" src="/logo-min.svg" />
        <FiUser />
        <h1>
          { user.name }
        </h1>
        <LogoutButton
          type="button"
          onClick={ handleLogout }
        >
          <BiLogOut />
        </LogoutButton>
        <form onSubmit={ handleSubmit(onSubmit) }>
          <Input
            placeholder="Adicionar nova tarefa"
            name="task"
            type="text"
            maxLength="51"
            register={ register }
            displayWarning={ !!errors.task }
            warningMessage={ errors.task?.message }
            width="99%"
            paddingRight="14%"
          />
          <button type="submit">
            <FaPlus />
          </button>
        </form>
      </Header>
      <main>
        {
          tasks.isLoading
            ? <h1>Carregando...</h1>
            : tasks.data.map((task) => {
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
