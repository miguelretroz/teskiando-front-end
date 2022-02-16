import React from 'react';
import { node } from 'prop-types';

import StyledButton from './style';

function Button({ children, ...props }) {
  return (
    <StyledButton type="button" { ...props }>
      { children }
    </StyledButton>
  );
}

Button.propTypes = {
  children: node.isRequired,
};

export default Button;
