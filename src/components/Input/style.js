import styled from 'styled-components';

const Label = styled.label`
  color: #26ffb1;
  display: flex;
  flex-direction: column;
  font-size: 24px;
  font-weight: 700;
  height: 90px;

  input {
    background-color: #e2e7ff;
    border: none;
    border-radius: 10px;
    color: #262626;
    font-size: 20px;
    font-weight: 500;
    height: 40px;
    padding: 8px 10px;
    padding-right: ${({ paddingRight }) => paddingRight || '8px'};
    width: ${({ width }) => width || '290px'};

    :focus {
      background-color: #d3d7e8;
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
        font-size: 14px;
      }
      `;
    }
    return '';
  }}
`;

export default Label;
