import styled, { createGlobalStyle } from 'styled-components';

const PageGlobalStyle = createGlobalStyle`

  body div:nth-child( 2 ) {
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    padding-top: 83px;
    width: 100%;
  }

  h1:nth-child( 1 ) {
    color: #3051ff;
    font-size: 30px;
    font-weight: 700;
    padding-bottom: 54px;
  }

  img:nth-child( 1 ) {
    padding-bottom: 75px;
  }

  button:nth-child( 4 ) {
    margin-bottom: 40px;

    div {
      height: 40px;
      margin-top: -5px;
    }
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

  input {
    margin-bottom: 6px;
    position: relative;
    transition-duration: 250ms;
  }

  input:focus {
    box-shadow: 0 2px 0px #3051ff;
    top: -1px;
  }

  label:nth-child( 1 ) {
    height: 75px;

    input {
      background-image: url('/user-icon-blue.svg');
      background-position: 10px;
      background-repeat: no-repeat;
      padding-left: 40px;
    }
  }

  label:nth-child( 2 ) {
    height: 75px;

    input {
      background-image: url('/email-icon-blue.svg');
      background-position: 10px;
      background-repeat: no-repeat;
      padding-left: 40px;
    }
  }

  label:nth-child( 3 ) {
    height: 80px;

    input {
      background-image: url('/lock-icon-blue.svg');
      background-position: 10px;
      background-repeat: no-repeat;
      padding-left: 40px;
    }
  }
`;
