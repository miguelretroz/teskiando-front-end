import styled from 'styled-components';

import { littleColorsByStatus } from 'helpers/colors/taskCard';

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
    padding: 0 5px;
    width: 190px;
  }

  form {
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    padding-right: 5px;

    h3 {
      margin-top: 15px;
    }

    h3, label:nth-child( 1 ) {
      color: #c4c4c4;
    }

    label:nth-child( 1 ) {
      align-items: flex-end;
      color: #c4c4c4;
      display: flex;
      flex-direction: column;

      input::placeholder {
        color: #9c9c9c;
      }
    }
  }
`;

const statusCheckedIcons = {
  toDo: 'checked-to-do.svg',
  inProgress: 'checked-in-progress.svg',
  finished: 'checked-finished.svg',
};

export const StatusCheckboxLabel = styled.label`
  margin-top: 5px;

  input:nth-child( 1 ) {
    display: none;
  }

  :after {
    margin-left: 5px;
    position: relative;
    top: 2px;
  }
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
`;

export const OpenFilterBarButton = styled.button`
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
