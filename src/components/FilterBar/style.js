/* eslint-disable max-lines */
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
  margin-top: 20px;
  position: relative;
  right: calc(50% - 97px);
  width: 190px;

  @media screen and ( min-width : 1360px ) {
    right: calc(50% - 122px);
    width: 240px;
  }
`;

export const DateInputsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  position: relative;
  width: 100%;

  h4 {
    color: #c4c4c4;
    font-size: 0.875em;
    position: absolute;
  }

  .title-date-start {
    left: 0px;
    top: -8px;

    @media screen and ( min-width : 1360px ) {
      left: -1px;
      top: -10px;
    }
  }

  .title-date-end {
    right: 65px;
    top: -8px;

    @media screen and ( min-width : 1360px ) {
      right: 87px;
      top: -10px;
    }
  }

  .react-datepicker-wrapper {
    margin-left: 10px;

    input {
      text-align: center;
    }

    input:nth-child( 1 ) {
      font-size: 1.125em;
      width: 100%;
    }

    input::placeholder {
      font-size: 0.875em;
    }
  }

  .react-datepicker-wrapper:nth-child( 2 ) {
    margin-left: 0px;
  }
`;

export const FilterBarContainer = styled.aside`
  background-color: #656565;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  color: white;
  height: 100vh;
  ${({ show }) => (show ? 'right: 0px;' : `
    right: -200px;
    box-shadow: none;
    @media screen and (min-width: 1360px) {
      right: -260px;
    }
  `)}
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

    .title-status {
      margin-bottom: 5px;
      margin-top: 18px;
    }

    .title-date {
      margin-bottom: 10px;
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

  @media screen and ( min-width : 1024px ) {
    padding-top: 67px;
  }

  @media screen and ( min-width : 1360px ) {
    padding-top: 76px;
    width: 250px;

    input:nth-child( 1 ) {
      height: 37.5px;
      width: 240px;
    }
  }

  @media screen and ( min-width : 1460px ) {
    padding-top: 102px;
    right: 0px;

    button:nth-child( 1 ) {
      display: none;
    }
  }
`;

export const OpenFilterBarButton = styled.button`

  --bottom: 10px;

  --right: 10px;

  @media screen and ( min-width : 1024px ) {

    --bottom: 20px;

    --right: 20px;
  }
  align-items: center;
  background-color: #3051ff;
  border: none;
  border-radius: 6px;
  bottom: var(--bottom);
  box-shadow: 0 3px #2239b7;
  color: white;
  display: flex;
  font-size: 1.95em;
  height: 40px;
  position: fixed;
  right: var(--right);
  width: 40px;
  z-index: 1;

  :hover {
    bottom: calc(var(--bottom) - 1px);
    box-shadow: 0 2px #2239b7;
  }

  :active {
    bottom: calc(var(--right) - 3px);
    box-shadow: none;
  }

  @media screen and ( min-width : 1460px ) {
    display: none;
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
