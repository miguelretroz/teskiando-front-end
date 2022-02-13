import { object, string } from 'yup';

import { regex } from '../../helpers';
import defaultMessages from './defaultMessages';

const NAME_MIN_LENGTH = 3;

const schema = object({
  name: string(defaultMessages.INCORRECT_TYPE('Nome', 'string'))
    .required(defaultMessages.REQUIRED('Nome'))
    .min(NAME_MIN_LENGTH, defaultMessages.MIN_LENGTH('Nome', NAME_MIN_LENGTH)),
  email: string(defaultMessages.REQUIRED('Email', 'string'))
    .required(defaultMessages.REQUIRED('Email'))
    .matches(regex.email, defaultMessages.INVALID_PATTERN('Email')),
  password: string(defaultMessages.REQUIRED('Senha'))
    .required(defaultMessages.REQUIRED('Senha'))
    .matches(regex.password, defaultMessages.INVALID_PATTERN('Senha')),
}).required();

export default schema;
