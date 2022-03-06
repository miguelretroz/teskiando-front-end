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
import { apiHooks } from 'hooks';

import PageGlobalStyle, { Header, LogoutButton } from './style';

function Tasks() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setError,
  } = useForm({ resolver: yupResolver(taskSchemas.create) });

  const tasks = apiHooks.tasks.useList();
  const taskRegister = apiHooks.tasks.useRegister(setError);
  const taskEdit = apiHooks.tasks.useEdit();
  const taskRemove = apiHooks.tasks.useRemove();

  const [user, setUser] = useState({ name: '', email: '' });

  useEffect(() => {
    let token = localStorage.getItem('accessToken');
    if (!token) return navigate('/login');
    token = JSON.parse(token);
    const { name, email } = jwtDecode(token);
    setUser({ name, email });
    axios.defaults.headers.common.Authorization = token;
  }, [navigate]);

  const onSubmit = async ({ task }) => {
    await taskRegister.mutate({ title: task });
    reset({ task: '' });
  };

  const handleEdit = async (taskId, newData) => {
    await taskEdit.mutateAsync({ taskId, newData });
  };

  const handleRemove = async (taskId) => {
    await taskRemove.mutateAsync(taskId);
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
              const { id } = task;
              return (<TaskCard
                key={ id }
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
