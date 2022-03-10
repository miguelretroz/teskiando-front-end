import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

import { FiUser } from 'react-icons/fi';
import { FaPlus } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

import {
  TaskCard,
  TextArea,
} from 'components';

import {
  loading,
} from 'animations/components';

import { apiHooks } from 'hooks';

import { MAX_TASK_TITLE_LENGTH } from 'helpers/constants';

import PageGlobalStyle,
{
  Header,
  LogoutButton,
  UserNameContainer,
  LogoImg,
  AddTaskForm,
  AddTaskButton,
  TitleTextCounter,
} from './style';

function Tasks() {
  const navigate = useNavigate();

  const tasks = apiHooks.tasks.useList();
  const taskRegister = apiHooks.tasks.useRegister(() => {});

  const [user, setUser] = useState({ name: '', email: '' });
  const [taskTitle, setTaskTitle] = useState('');

  useEffect(() => {
    let token = localStorage.getItem('accessToken');
    if (!token) return navigate('/login');
    token = JSON.parse(token);
    const { name, email } = jwtDecode(token);
    setUser({ name, email });
    axios.defaults.headers.common.Authorization = token;
  }, [navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (taskTitle !== '') {
      await taskRegister.mutateAsync({ title: taskTitle });
      setTaskTitle('');
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    axios.defaults.headers.common.Authorization = '';
    navigate('/login');
  };

  const handleChangeTitle = ({ target }) => setTaskTitle(target.value);

  return (
    <>
      <PageGlobalStyle />
      <Header>
        <LogoImg alt="logo" src="/logo-min.svg" />
        <UserNameContainer>
          <FiUser />
          <h1>
            { user.name }
          </h1>
        </UserNameContainer>
        <LogoutButton
          type="button"
          onClick={ handleLogout }
        >
          <BiLogOut />
        </LogoutButton>
        <AddTaskForm onSubmit={ onSubmit }>
          <TextArea
            rows="1"
            name="task"
            value={ taskTitle }
            onChange={ handleChangeTitle }
            placeholder="Digite o título da tarefa..."
            maxLength={ MAX_TASK_TITLE_LENGTH }
            paddingRight="14%"
          />
          <TitleTextCounter>
            { `${taskTitle.length}/${MAX_TASK_TITLE_LENGTH}` }
          </TitleTextCounter>
          <AddTaskButton
            type="submit"
            disabled={ taskRegister.isLoading && taskTitle !== '' }
          >
            {
              !taskRegister.isLoading
                ? <FaPlus />
                : <loading.Spinner />
            }
          </AddTaskButton>
        </AddTaskForm>
      </Header>
      <main>
        {
          tasks.isLoading
            ? <loading.TaskList />
            : tasks.data.map((task) => {
              const { id } = task;
              return (<TaskCard
                key={ id }
                { ...task }
              />);
            })
        }
      </main>
    </>
  );
}

export default Tasks;
