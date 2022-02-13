export const email = new RegExp(
  [
    '^[\\w.!#$%&\'*+\\/=?^{|}~-]+',
    '@[a-zA-Z\\d]',
    '(?:[\\w-]{0,61}[a-zA-Z\\d])?',
    '(?:\\.[a-zA-Z\\d](?:[\\w-]{0,61}[a-zA-Z\\d])?)+$',
  ].join(''),
);

export const password = new RegExp(
  [
    '^(?=.*[a-z])(?=.*[A-Z])',
    '(?=.*\\d)(?=.*[!@#$%&*()-+_={}[\\]~^?]).{8,}$',
  ].join(''),
);

export default {
  email,
  password,
};
