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
  display: flex;
  height: 90px;
  justify-content: center;
  padding-top: 10px;
  position: fixed;
  width: 100vw;
  z-index: 3;

  &:nth-child( 1 ) {
    font-size: 33px;
  }


  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin-left: 5px;
  }

  input {
    bottom: 0;
    left: 0;
    position: absolute;
  }

  form button {
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

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #e2e7ff;
  height: 24px;
  position: absolute;
  right: 8px;
  top: 7px;
  width: 24px;

  svg {
    font-size: 24px;
    left: 0;
    position: absolute;
    top: 0;
  }
`;
