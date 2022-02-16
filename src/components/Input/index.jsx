import React from 'react';
import { string, func, bool } from 'prop-types';

import Label from './style';

function Input({
  labelText,
  name,
  type,
  displayWarning,
  warningMessage,
  register,
  placeholder,
  minLength,
  maxLength,
  ...props
}) {
  return (
    <Label
      htmlFor={ name }
      warning={ displayWarning }
      { ...props }
    >
      { labelText }
      <input
        type={ type }
        { ...register(name) }
        placeholder={ placeholder }
        minLength={ minLength }
        maxLength={ maxLength }
      />
      {
        displayWarning && <span>{ warningMessage }</span>
      }
    </Label>
  );
}

Input.propTypes = {
  register: func.isRequired,
  labelText: string,
  name: string.isRequired,
  type: string.isRequired,
  displayWarning: bool,
  warningMessage: string,
  placeholder: string,
  minLength: string,
  maxLength: string,
};

Input.defaultProps = {
  labelText: '',
  displayWarning: false,
  warningMessage: '',
  placeholder: '',
  minLength: '',
  maxLength: '',
};

export default Input;
