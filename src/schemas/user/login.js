import { object, string } from 'yup';

import { regex } from 'helpers';
import defaultMessages from './defaultMessages';

const schema = object({
  email: string(defaultMessages.REQUIRED('Email', 'string'))
    .required(defaultMessages.REQUIRED('Email'))
    .matches(regex.email, defaultMessages.INVALID_PATTERN('Email')),
  password: string(defaultMessages.REQUIRED('Senha'))
    .required(defaultMessages.REQUIRED('Senha'))
    .matches(regex.password, defaultMessages.INVALID_PATTERN('Senha')),
}).required();

export default schema;
