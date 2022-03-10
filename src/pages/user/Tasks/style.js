import styled, { createGlobalStyle } from 'styled-components';

const PageGlobal = createGlobalStyle`

  body {
    position: relative;
  }
`;

export default PageGlobal;

export const Header = styled.header`
  background-color: #3051ff;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  color: #e2e7ff;
  display: flex;
  height: auto;
  justify-content: center;
  margin-bottom: 10px;
  padding-top: 10px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;

  img {
    left: 5px;
    position: absolute;
    top: 6px;
    width: 34px;
  }

  &:nth-child( 1 ) {
    font-size: 33px;
  }


  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin-left: 5px;
  }

  form {
    display: flex;
    height: auto;
    margin-top: 40px;
    position: relative;
    width: 100%;
  }

  textarea {
    background-color: #e2e7ff;
    border: none;
    border-radius: 10px;
    bottom: 0;
    color: #262626;
    font-size: 20px;
    font-weight: 600;
    height: 40px;
    left: 0;
    padding: 0;
    padding-left: 5px;
    padding-right: 40px;
    padding-top: 4px;
    width: 99%;
  }

  input {
    bottom: 0;
    left: 0;
    position: absolute;
  }

  form button {
    align-items: center;
    background-color: #3051ff;
    border: none;
    border-radius: 10px;
    bottom: 0;
    color: white;
    display: flex;
    font-size: 27px;
    height: 100%;
    justify-content: center;
    overflow: hidden;
    padding: 5px;
    position: absolute;
    right: 0;
    width: 40px;

    div {
      height: 100px;
      position: absolute;
      width: 110px;
    }
  }
`;

export const UserNameContainer = styled.div`
  display: flex;
  position: absolute;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #e2e7ff;
  height: 24px;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 24px;

  svg {
    font-size: 24px;
    left: 0;
    position: absolute;
    top: 0;
  }
`;
