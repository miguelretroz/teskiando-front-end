import styled, { createGlobalStyle } from 'styled-components';

const PageGlobal = createGlobalStyle`

  main {
    padding-top: 100px;
  }
`;

export default PageGlobal;

export const Header = styled.header`
  background-color: #3051ff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  color: #e2e7ff;
  height: 90px;
  position: fixed;
  width: 100vw;
  z-index: 3;

  input {
    bottom: 0;
    left: 0;
    position: absolute;
  }

  button {
    background-color: #3051ff;
    border: none;
    border-radius: 10px;
    bottom: 0;
    color: white;
    font-size: 27px;
    height: 41px;
    padding: 5px;
    position: absolute;
    right: 0;
    width: 40px;
  }
`;
