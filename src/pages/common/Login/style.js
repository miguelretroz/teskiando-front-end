import styled, { createGlobalStyle } from 'styled-components';

const PageGlobalStyle = createGlobalStyle`

  body div:nth-child( 2 ) {
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    padding-top: 75px;
    width: 100%;
  }

  img {
    padding-bottom: 75px;
  }
`;

export default PageGlobalStyle;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  width: 100%;

  label:nth-child( 1 ) {
    height: 75px;
  }

  label:nth-child( 2 ) {
    height: 65px;
  }

  input {
    position: relative;
    transition-duration: 250ms;
  }

  input:focus {
    box-shadow: 0 3px 8px #3051ff;
    top: -1px;
  }
`;