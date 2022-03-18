/* eslint-disable max-lines */
import styled, { createGlobalStyle } from 'styled-components';

const PageGlobal = createGlobalStyle`

  body {
    font-size: 16px;
    position: relative;
  }

  main {
    margin: auto;
    max-width: 950px;
  }

  @media screen and ( min-width : 1000px ) {

    body {
      font-size: 20px;
    }
  }
`;

export default PageGlobal;

export const Header = styled.header`
  background-color: #3051ff;
  color: #e2e7ff;
  display: flex;
  height: fit-content;
  justify-content: center;
  margin-bottom: 33px;
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;

  @media screen and ( min-width : 800px ) {
    box-shadow: 0 6px 0 #2139b7;
    height: 90px;
    margin-bottom: 23px;
  }

  @media screen and ( min-width : 1024px ) {
    height: 60px;
  }

`;

export const LogoImg = styled.img`
  left: 5px;
  max-width: 50px;
  min-width: 34px;
  position: absolute;
  top: 4px;
  width: 34px;

  @media screen and ( min-width : 900px ) {
    left: 9px;
    top: 5px;
    width: calc(100% - 880px);
  }

  @media screen and ( min-width : 1024px ) {
    max-width: 52px;
  }
`;

export const UserNameContainer = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  top: 6px;

  svg {
    font-size: 2.063em;
  }

  h1 {
    font-size: 1.25em;
    font-weight: 700;
    margin-left: 5px;
  }

  @media screen and ( min-width : 1024px ) {
    right: 56px;
    top: 15px;
  }
`;

export const AddTaskButton = styled.button`
  align-items: center;
  background-color: #3051ff;
  border: none;
  border-bottom-right-radius: 10px;
  box-shadow: 0 6px #2239b7;
  color: white;
  display: flex;
  font-size: 1.688em;
  height: calc(100% - 6px);
  justify-content: center;
  overflow: hidden;
  padding: 5px;
  position: absolute;
  right: 0;
  top: 0;
  transition-duration: 100ms;
  width: 40px;

  :hover {
    box-shadow: 0 3px #2239b7;
    height: calc(100% - 3px);
  }

  div {
    height: 100px;
    position: absolute;
    width: 110px;
  }

  :active, :disabled {
    box-shadow: none;
    height: 100%;
  }

  span {
    display: none;
  }

  @media screen and ( min-width : 790px ) {
    background-color: #2e4df2;
    border-top-right-radius: 10px;
    width: 50px;
  }
`;

export const AddTaskForm = styled.form`
  display: flex;
  height: fit-content;
  margin-top: 21px;
  max-width: 800px;
  padding-bottom: 6px;
  position: relative;
  top: 22px;
  width: 100%;

  textarea {
    background-color: #e2e7ff;
    border: none;
    border-radius: 10px 0 0 10px;
    bottom: 0;
    box-shadow: 0 6px lightgray;
    color: #262626;
    font-size: 1.25em;
    font-weight: 600;
    height: auto;
    left: 0;
    max-width: 750px;
    padding: 9px 0px 12px 10px;
    position: relative;
    width: calc(100% - 40px);

    ::placeholder {
      color: rgba(0, 0, 0, 0.4);
      font-size: 0.9em;
      font-weight: 800;
      padding-top: 2.5px;
    }

    :focus {
      background-color: #dce0f2;
      box-shadow: 0 3px lightgray;
      top: 3px;
    }

    @media screen and ( min-width : 800px ) {
      width: 750px;
    }

    @media screen and ( min-width : 1024px ) {
      max-width: 650px;
    }
  }

  @media screen and ( min-width : 1024px ) {
    left: -86px;
    margin: 0;
    max-width: 700px;
    top: 12px;
  }
`;

export const TitleTextCounter = styled.span`
  bottom: 5px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.875em;
  font-weight: 700;
  position: absolute;
  right: 45px;

  @media screen and ( min-width : 790px ) {
    right: 55px;
  }
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #e2e7ff;
  font-size: 1em;
  height: 25.44px;
  position: absolute;
  right: 8px;
  top: 7px;
  width: 25.44px;

  svg {
    font-size: 1.59em;
    left: 0;
    position: absolute;
    top: 0;
  }

  span {
    display: none;
    font-size: 1.25em;
  }

  @media screen and ( min-width : 800px ) {
    font-size: min(1.205em, 19px);
    height: 30.64px;
    padding: 0;
    width: 30.64px;
  }

  @media screen and ( min-width : 1024px ) {
    top: calc(50% - 15px);
  }
`;
