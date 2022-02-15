import { object, string } from 'yup';

// import defaultMessages from './defaultMessages';

const TASK_TITLE_MIN_LENGTH = 1;
const TASK_TITLE_MAXLENGTH = 50;

const schema = object({
  task: string('')
    .required('')
    .min(TASK_TITLE_MIN_LENGTH, '')
    .max(TASK_TITLE_MAXLENGTH, `Máximo ${TASK_TITLE_MAXLENGTH} caracteres`),
}).required();

export default schema;
