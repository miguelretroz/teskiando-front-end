/* eslint-disable max-lines */
import styled, { createGlobalStyle } from 'styled-components';

const PageGlobal = createGlobalStyle`

  .root {
    font-size: 16px;
    position: relative;
  }

  main {
    margin: auto;
    max-width: 950px;
  }

  @media screen and ( min-width : 1360px ) {

    .root {
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

  @media screen and ( min-width : 1360px ) {
    box-shadow: 0 8px 0 #2139b7;
    height: 70px;
    margin-bottom: 20px;
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

  @media screen and ( min-width : 1360px ) {
    left: 18px;
    max-width: 58px;
    top: 7px;
  }
`;

export const UserNameContainer = styled.div`
  align-items: center;
  display: flex;
  position: absolute;
  top: 6px;
  width: max-content;

  svg {
    font-size: 2.063em;
  }

  h1 {
    font-size: 1.25em;
    font-weight: 700;
    margin-left: 5px;
  }

  @media screen and ( min-width : 1024px ) {
    left: 78vw;
    top: 15px;
  }

  @media screen and ( min-width : 1360px ) {
    left: 75.75vw;
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

  @media screen and ( min-width : 1360px ) {
    box-shadow: 0 8px #2239b7;
    height: calc(100% - 8px);
    padding: 0px;
    width: 160px;

    .plus-icon {
      display: none;
    }

    span {
      display: initial;
      font-size: 0.6em;
    }
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

    @media screen and ( min-width : 1360px ) {
      box-shadow: 0 8px lightgray;
      max-width: 640px;

      :focus {
        background-color: #dce0f2;
        box-shadow: 0 5px lightgray;
        top: 3px;
      }
    }
  }

  @media screen and ( min-width : 1024px ) {
    left: -86px;
    margin: 0;
    max-width: 700px;
    top: 12px;
  }

  @media screen and ( min-width : 1100px ) {
    left: -125px;
  }

  @media screen and ( min-width : 1360px ) {
    left: -75px;
    margin-top: 0px;
    max-width: 800px;
    padding-bottom: 8px;
    top: 16px;
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

  @media screen and ( min-width : 1360px ) {
    right: 165px;
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
    position: relative;
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

  @media screen and ( min-width : 1360px ) {
    height: 48px;
    right: 25px;
    top: calc(50% - 24px);
    width: 53px;

    span {
      display: initial;
      font-size: 1.579em;
      text-shadow: 0 3px 0 rgba(0, 0, 0, 0.3);
    }

    svg {
      display: none;
    }

    :hover {

      span {
        text-shadow: none;
        top: 1px;
      }
    }
  }
`;

export const NotFoundContainer = styled.div`
  opacity: 50%;
  position: relative;
  text-align: center;

  h2 {
    font-size: 1.2em;
    left: calc(50% - 122px);
    margin: auto;
    position: absolute;
    top: 35px;
    z-index: 2;
  }
`;
