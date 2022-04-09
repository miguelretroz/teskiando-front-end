import styled from 'styled-components';

import { littleColorsByStatus } from 'helpers/colors/taskCard';
import Button from '../Button/style';

const statusCheckedIcons = {
  toDo: 'checked-to-do.svg',
  inProgress: 'checked-in-progress.svg',
  finished: 'checked-finished.svg',
};

export const StatusCheckboxLabel = styled.label`
  font-size: 1.2em;
  margin-bottom: 15px;
  ${({ checked, htmlFor }) => {
    if (checked) {
      return `
      color: ${littleColorsByStatus[htmlFor]};
      ::after{
        content: url('/checkbox/${statusCheckedIcons[htmlFor]}');
      }
      `;
    }
    return `
      ::after{
        content: url('/checkbox/checkbox.svg');
      }
      `;
  }}
  padding-right: 5px;

  input:nth-child( 1 ) {
    display: none;
  }

  :after {
    margin-left: 5px;
    position: relative;
    top: 2px;
  }
`;

export const ClearButton = styled(Button)`
  border-radius: 6.4px;
  font-size: 1.25em;
  height: 30px;
  position: relative;
  right: calc(50% - 95px);
  width: 190px;
`;

export const DateInputsContainer = styled.div`
`;

export const FilterBarContainer = styled.aside`
  background-color: #656565;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  color: white;
  height: 100vh;
  ${({ show }) => (show ? 'right: 0px;' : 'right: -200px; box-shadow: none;')}
  overflow: hidden;
  padding-left: 5px;
  padding-top: 105px;
  position: fixed;
  top: 0px;
  transition: right 400ms;
  width: 200px;
  z-index: 2;

  input:nth-child( 1 ) {
    background-color: white;
    border: none;
    border-radius: 5px;
    font-size: 1em;
    height: 30px;
    margin-top: 6px;
    padding: 0 5px;
    width: 190px;
  }

  form {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    padding-right: 5px;

    h3 {
      margin-bottom: 5px;
      margin-top: 18px;
    }

    h3, label:nth-child( 1 ) {
      color: #c4c4c4;
    }

    label:nth-child( 1 ) {
      align-items: flex-end;
      color: #c4c4c4;
      display: flex;
      flex-direction: column;

      input {
        font-size: 1.125em;
      }

      input::placeholder {
        color: #9c9c9c;
        font-size: 0.875em;
      }
    }
  }
`;

export const OpenFilterBarButton = styled.button`
  align-items: center;
  background-color: #3051ff;
  border: none;
  border-radius: 6px;
  bottom: 10px;
  box-shadow: 0 3px #2239b7;
  color: white;
  display: flex;
  font-size: 1.95em;
  height: 40px;
  position: fixed;
  right: 10px;
  width: 40px;
  z-index: 1;

  :hover {
    bottom: 9px;
    box-shadow: 0 2px #2239b7;
  }

  :active {
    bottom: 7px;
    box-shadow: none;
  }
`;

export const CloseFilterBarButton = styled.button`
  background: none;
  border: none;
  color: #c4c4c4;
  font-size: 2.6em;
  height: 20px;
  padding: 0;
  position: relative;
  width: 20px;

  svg {
    left: -11px;
    position: absolute;
    top: -11px;
  }
`;
