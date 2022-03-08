import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import {
  Input,
  Button,
} from 'components';

import {
  loading,
} from 'animations/components';

import { userSchemas } from 'schemas';
import { apiHooks, useDisableWithDelay } from 'hooks';

import PageGlobalStyle, { Form } from './style';

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(userSchemas.create) });

  const ping = apiHooks.common.usePing();
  const userRegister = apiHooks.common.useRegister(() => navigate('/login'), setError);

  const pingLoadingAnimationDisableDelay = useDisableWithDelay(ping.isLoading);

  useEffect(() => {
    if (localStorage.getItem('accessToken')) return navigate('/tasks');
  }, [navigate]);

  const onSubmit = async ({ name, email, password }) => userRegister.mutateAsync(
    { name, email, password },
  );

  if (ping.isLoading || pingLoadingAnimationDisableDelay.isEnable) {
    if (!ping.isLoading) {
      const animationDelay = 1500;
      pingLoadingAnimationDisableDelay.disable(animationDelay);
    }
    return <loading.LogoAndMessage />;
  }

  return (
    <>
      <PageGlobalStyle />
      <h1>Criar novo usuário</h1>
      <Form onSubmit={ handleSubmit(onSubmit) }>
        <Input
          placeholder="Nome"
          name="name"
          type="text"
          register={ register }
          displayWarning={ errors.name }
          warningMessage={ errors.name?.message }
        />
        <Input
          placeholder="Email"
          name="email"
          type="email"
          register={ register }
          displayWarning={ errors.email }
          warningMessage={ errors.email?.message }
        />
        <Input
          placeholder="Senha"
          name="password"
          type="password"
          register={ register }
          displayWarning={ errors.password }
          warningMessage={ errors.password?.message }
        />
        <Button
          type="submit"
          disabled={ userRegister.isLoading }
          id="btn-register"
        >
          {
            !userRegister.isLoading
              ? 'Registrar'
              : <loading.Spinner />
          }
        </Button>
        <Button
          type="button"
          onClick={ () => navigate('/login') }
          bgColor="#AEBBFF"
          shadowColor="#3051FF"
          color="#3051FF"
          disabled={ userRegister.isLoading }
        >
          Voltar
        </Button>
      </Form>
    </>
  );
}

export default Register;
