import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../../components';
import { userSchemas } from '../../../schemas';
import { api } from '../../../services';

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
    <form onSubmit={ handleSubmit(onSubmit) }>
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
      <button type="submit">
        Login
      </button>
      <button type="button" onClick={ () => navigate('/register') }>
        Registrar
      </button>
    </form>
  );
}

export default Login;
