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

  h1 {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    margin-left: 5px;
  }
`;

export const AddTaskForm = styled.form`
  display: flex;
  height: auto;
  margin-top: 40px;
  position: relative;
  width: 100%;

  textarea {
    background-color: #e2e7ff;
    border: none;
    border-radius: 10px;
    bottom: 0;
    color: #262626;
    font-size: 20px;
    font-weight: 600;
    height: auto;
    left: 0;
    padding: 10px 40px 13px 10px;
    width: 99%;

    ::placeholder {
      color: rgba(0, 0, 0, 0.4);
      font-size: 18px;
      font-weight: 800;
      padding-top: 2.5px;
    }
  }
`;

export const TitleTextCounter = styled.span`
  bottom: 0;
  color: rgba(0, 0, 0, 0.5);
  font-size: 14px;
  font-weight: 700;
  position: absolute;
  right: 45px;
`;

export const AddTaskButton = styled.button`
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
