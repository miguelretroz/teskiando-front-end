import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';

import { Input } from '../../../components';
import { userSchemas } from '../../../schemas';
import { api } from '../../../services';

function Register() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm({ resolver: yupResolver(userSchemas.create) });

  const onSubmit = async ({ name, email, password }) => {
    await api.common.register(
      { name, email, password },
      setError,
      () => navigate('/login'),
    );
  };

  return (
    <>
      <h1>Criar novo usuário</h1>
      <form onSubmit={ handleSubmit(onSubmit) }>
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
        <button type="submit">Registrar</button>
        <button type="button" onClick={ () => navigate('/login') }>
          Voltar
        </button>
      </form>
    </>
  );
}

export default Register;
