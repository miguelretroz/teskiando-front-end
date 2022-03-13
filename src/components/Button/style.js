import styled from 'styled-components';

const Button = styled.button`
  background-color: ${({ bgColor }) => bgColor || '#3051ff'};
  border: none;
  border-radius: 8px;
  box-shadow: 0 3px 0px ${({ shadowColor }) => shadowColor || '#AEBBFF'};
  color: ${({ color }) => color || 'white'};
  font-size: 1.563em;
  height: ${({ height }) => height || '30px'};
  line-height: ${({ height }) => height || '30px'};
  padding: 0;
  position: relative;
  transition-duration: 200ms;
  width: ${({ width }) => width || '150px'};

  :hover {
    box-shadow: none;
    top: 1px;
  }

  :disabled {
    box-shadow: none;
    opacity: 80%;
    top: 1px;
  }
`;

export default Button;
