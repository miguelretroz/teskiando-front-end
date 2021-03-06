import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import {
  apiHooks,
  useDisableWithDelay,
} from 'hooks';

import {
  Input,
  Button,
} from 'components';

import {
  loading,
  AsideTaskCards,
} from 'animations/components';

import { userSchemas } from 'schemas';

import PageGlobalStyle,
{
  Form,
} from './style';

function Login() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(userSchemas.login) });

  const ping = apiHooks.common.usePing();
  const login = apiHooks.common.useLogin(() => navigate('/tasks'), setError);

  const pingLoadingAnimationDisableDelay = useDisableWithDelay(ping.isLoading);

  useEffect(() => {
    if (localStorage.getItem('accessToken')) navigate('/tasks');
    document.title = 'Téskiando | Login';

    return () => {
      document.title = 'Téskiando';
    };
  }, [navigate]);

  const onSubmit = async ({ email, password }) => login
    .mutateAsync({ email, password, setError, redirect: () => navigate('/tasks') });

  if (ping.isLoading || pingLoadingAnimationDisableDelay.isEnable) {
    if (!ping.isLoading) {
      const animationDelay = 1500;
      pingLoadingAnimationDisableDelay.disable(animationDelay, animationDelay);
    }
    return <loading.LogoAndMessage />;
  }

  return (
    <>
      <PageGlobalStyle />
      <AsideTaskCards />
      <main>
        <img alt="téskiando-logo" src="/main-logo.svg" />
        <Form onSubmit={ handleSubmit(onSubmit) } noValidate>
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
          <Button
            type="submit"
            disabled={ login.isLoading }
          >
            {
              !login.isLoading
                ? 'Login'
                : <loading.Spinner />
            }
          </Button>
          <Button
            type="button"
            onClick={ () => navigate('/register') }
            bgColor="#AEBBFF"
            shadowColor="#3051FF"
            color="#3051FF"
            disabled={ login.isLoading }
          >
            Registrar
          </Button>
        </Form>
      </main>
    </>
  );
}

export default Login;
