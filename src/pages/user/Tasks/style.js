import styled, { createGlobalStyle } from 'styled-components';

const PageGlobal = createGlobalStyle`

  body {
    font-size: 16px;
    position: relative;
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
`;

export const LogoImg = styled.img`
  left: 5px;
  position: absolute;
  top: 6px;
  width: 34px;
`;

export const UserNameContainer = styled.div`
  display: flex;
  font-size: 33px;
  position: absolute;

  svg {
    font-size: 2.063em;
  }

  h1 {
    font-size: 1.25em;
    font-weight: 700;
    line-height: 30px;
    margin-left: 5px;
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
`;

export const AddTaskForm = styled.form`
  display: flex;
  height: auto;
  margin-top: 40px;
  padding-bottom: 6px;
  position: relative;
  width: 100%;

  textarea {
    background-color: #e2e7ff;
    border: none;
    border-radius: 10px;
    bottom: 0;
    box-shadow: 0 6px lightgray;
    color: #262626;
    font-size: 1.25em;
    font-weight: 600;
    height: auto;
    left: 0;
    padding: 9px 45px 12px 10px;
    position: relative;
    width: 100%;

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
  }
`;

export const TitleTextCounter = styled.span`
  bottom: 5px;
  color: rgba(0, 0, 0, 0.5);
  font-size: 0.875em;
  font-weight: 700;
  position: absolute;
  right: 45px;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: #e2e7ff;
  font-size: 1em;
  height: 24px;
  position: absolute;
  right: 8px;
  top: 8px;
  width: 24px;

  svg {
    font-size: 1.59em;
    left: 0;
    position: absolute;
    top: 0;
  }
`;
