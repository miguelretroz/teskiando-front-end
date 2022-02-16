import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { Input, Button } from '../../../components';
import { userSchemas } from '../../../schemas';
import { api } from '../../../services';

import PageGlobalStyle, { Form } from './style';

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(userSchemas.login) });

  const onSubmit = async ({ email, password }) => {
    await api.common.login({ email, password }, setError, () => navigate('/tasks'));
  };
  return (
    <>
      <PageGlobalStyle />
      <img alt="téskiando-logo" src="/main-logo.svg" />
      <Form onSubmit={ handleSubmit(onSubmit) }>
        <Input
          placeholder="Email"
          name="email"
          type="email"
          register={ register }
          displayWarning={ !!errors.email }
          warningMessage={ errors.email?.message }
        />
        <Input
          placeholder="Senha"
          name="password"
          type="password"
          register={ register }
          displayWarning={ !!errors.password }
          warningMessage={ errors.password?.message }
        />
        <Button type="submit">
          Login
        </Button>
        <Button
          type="button"
          onClick={ () => navigate('/register') }
          bgColor="#AEBBFF"
          shadowColor="#3051FF"
          color="#3051FF"
        >
          Registrar
        </Button>
      </Form>
    </>
  );
}

export default Login;
