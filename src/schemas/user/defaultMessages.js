const INCORRECT_TYPE = (key, type) => `${key} deve ser "${type}"`;
const REQUIRED = (key) => `${key} é obrigatório`;
const INVALID_PATTERN = (key) => `${key} no formato incorreto`;
const MIN_LENGTH = (key, min) => `${key} deve ter ${min} ou mais caracteres`;
const ALREADY_REGISTERED = (key) => `${key} já registrado`;
const PASSWORDS_MUST_BE_EQUAL = () => 'As senhas devem ser iguais';
const NOT_FOUND = (key) => `${key} não encontrado`;
const INCORRECT = (key) => `${key} incorret${key[key
  .length - 1] === 'a' ? 'a' : 'o'}`;

export default {
  INCORRECT_TYPE,
  REQUIRED,
  INVALID_PATTERN,
  MIN_LENGTH,
  ALREADY_REGISTERED,
  PASSWORDS_MUST_BE_EQUAL,
  NOT_FOUND,
  INCORRECT,
};
