import styled from 'styled-components';

const Label = styled.label`
  color: #26ffb1;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  height: 90px;

  input {
    background-color: #e2e7ff;
    border: none;
    border-radius: 10px;
    color: #262626;
    font-size: 1.25em;
    font-weight: 600;
    height: 40px;
    padding: 8px 10px;
    padding-right: ${({ paddingRight }) => paddingRight || '8px'};
    width: ${({ width }) => width || '290px'};

    ::placeholder {
      color: #aebbff;
    }

    :focus {
      background-color: #d3d7e8;
      border: none;

      ::placeholder {
        color: #9ea2b3;
      }
    }
  }
  ${({ warning }) => {
    if (warning) {
      return `
      color: red;

      input {
        border: 2px solid red;
      }

      span {
        color: red;
        font-size: 0.875em;
      }
      `;
    }
    return '';
  }}
`;

export default Label;
