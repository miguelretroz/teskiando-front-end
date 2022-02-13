import React from 'react';
import { useForm } from 'react-hook-form';

import { Input } from '../../../components';

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {};

  return (
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
    </form>
  );
}

export default Register;
