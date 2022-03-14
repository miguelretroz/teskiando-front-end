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
    padding-top: 83px;
    width: 100%;
  }

  button:nth-child( 4 ) {
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

  @media screen and ( min-width : 1360px ) {

    .root {
      font-size: 20px;
    }
  }
`;

export default PageGlobalStyle;

export const Title = styled.h1`
  color: #3051ff;
  font-size: 1.875em;
  font-weight: 700;
  padding-bottom: 54px;

  @media screen and ( min-width : 1360px ) {
    padding-bottom: 59px;
  }
`;

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

  @media screen and ( min-width : 1360px ) {

    label {
      width: 360px;
    }

    label:nth-child( 1 ) {
      height: 93.75px;
    }

    label:nth-child( 2 ) {
      height: 93.75px;
    }

    label:nth-child( 3 ) {
      height: 100px;
    }

    label input {
      border-radius: 12.5px;
      height: 50px;
      width: 100%;
    }

    button {
      border-radius: 9.98px;
      height: 38.5px;
      width: 192.3px;
    }

    button:nth-child( 3 ) {
      margin-bottom: 45px;

      div {
        height: 50px;
      }
    }
  }
`;
