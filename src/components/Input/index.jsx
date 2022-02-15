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
  ...props
}) {
  return (
    <Label htmlFor={ name } warning={ displayWarning }>
      { labelText }
      <input
        type={ type }
        { ...props }
        { ...register(name) }
        placeholder={ placeholder }
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
};

Input.defaultProps = {
  labelText: '',
  displayWarning: false,
  warningMessage: '',
  placeholder: '',
};

export default Input;
