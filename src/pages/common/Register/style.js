import styled, { createGlobalStyle } from 'styled-components';

const PageGlobalStyle = createGlobalStyle`

  body div:nth-child( 2 ) {
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    padding-top: 75px;
    width: 100%;
  }

  img:nth-child( 1 ) {
    padding-bottom: 75px;
  }

  button:nth-child( 4 ) {
    margin-bottom: 40px;
  }
`;

export default PageGlobalStyle;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  width: 100%;

  label {
    height: 75px;
  }

  label:nth-child( 3 ) {
    height: 80px;
  }

  input {
    margin-bottom: 6px;
    position: relative;
    transition-duration: 250ms;
  }

  input:focus {
    box-shadow: 0 3px 8px #3051ff;
    top: -1px;
  }
`;
