import styled, { createGlobalStyle } from 'styled-components';

const PageGlobalStyle = createGlobalStyle`

  body {
    overflow: hidden;
  }

  .root {
    display: flex;
    flex-flow: row nowrap;
    overflow: hidden;
    padding-bottom: 10px;
  }

  main {
    align-items: center;
    display: flex;
    flex-flow: column wrap;
    padding-top: 75px;
    width: 100%;
  }

  img:nth-child( 1 ) {
    padding-bottom: 75px;
  }

  button:nth-child( 3 ) {
    margin-bottom: 40px;

    div {
      height: 40px;
      margin-top: -5px;
    }
  }

  @media screen and ( min-width : 900px ) {

    main {
      justify-content: center;
      padding-top: 0;
    }
  }
`;

export default PageGlobalStyle;

export const Form = styled.form`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  width: 100%;

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
      background-image: url('/email-icon-blue.svg');
      background-position: 10px;
      background-repeat: no-repeat;
      padding-left: 40px;
    }
  }

  label:nth-child( 2 ) {
    height: 65px;

    input {
      background-image: url('/lock-icon-blue.svg');
      background-position: 10px;
      background-repeat: no-repeat;
      padding-left: 40px;
    }
  }
`;
