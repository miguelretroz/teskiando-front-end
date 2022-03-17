/* eslint-disable max-lines */
import styled from 'styled-components';

import { littleColorsByStatus, darkColorsByStatus } from 'helpers/colors/taskCard';
import {
  littleColorsFiltersByStatus, darkColorsFiltersByStatus,
} from 'helpers/colors/filters';

const colorByStatus = ({ status, isEditing }) => (
  isEditing ? darkColorsByStatus[status] : littleColorsByStatus[status]);

const borderColorByStatus = ({ status, isEditing }) => (
  isEditing ? littleColorsByStatus[status] : darkColorsByStatus[status]);

export default styled.div`
  position: relative;
  z-index: 0;
`;

export const TaskContainer = styled.div`
  background-color: ${colorByStatus};
  border: 2px solid ${borderColorByStatus};
  border-radius: 5px;
  box-shadow: 0 2px 6px ${({ status }) => darkColorsByStatus[status]};
  display: flex;
  flex-direction: column;
  height: fit-content;
  margin-bottom: 1px;
  min-height: 75px;
  ${({ showDescription, isEditing }) => {
    let result = '';
    if (showDescription) {
      if (!isEditing) result += 'border-bottom-color: rgba(0, 0, 0, 0.15);';
      result += 'box-shadow: none;';
    }
    return result;
  }}
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  transition: 200ms;
  width: 100%;
  z-index: 2;
`;

export const DateBar = styled.span`
  background-color: ${borderColorByStatus};
  border-bottom-right-radius: 5px;
  color: ${colorByStatus};
  padding-left: 10px;
  padding-right: 10px;
  position: absolute;
`;

export const StatusBar = styled.button`
  background-color: ${borderColorByStatus};
  border: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  box-shadow: 0 3px rgba(0, 0, 0, 0.1);
  color: ${colorByStatus};
  font-size: 16px;
  height: 16px;
  line-height: 16px;
  padding: 0;
  padding-left: 15px;
  padding-right: 15px;
  position: absolute;
  right: 28px;
  transition-duration: 200ms;
  z-index: 1;

  :hover {
    box-shadow: 0 2px rgba(0, 0, 0, 0.1);
    height: 17px;
  }

  :active {
    box-shadow: none;
    height: 19px;
  }
`;

export const TitleTextCounter = styled.span`
  bottom: 5px;
  color: ${({ status }) => littleColorsByStatus[status]};
  font-size: 14px;
  ${({ isEditing }) => (isEditing ? '' : 'display: none;')}
  position: absolute;
  right: 5px;
`;

export const ToggleStatusChangeBar = styled.button`
  background: none;
  border: 0px solid;
  border-color: rgba(0, 0, 0, 0.01);
  border-radius: 6px;
  box-shadow: 0 3px rgba(0, 0, 0, 0.1);
  height: 26px;
  left: 8px;
  overflow: hidden;
  position: absolute;
  top: 29.5px;
  transition-duration: 200ms;
  width: 26px;

  img {
    width: 26px;
  }

  img, div {
    filter: ${({ status, isEditing }) => (
    isEditing
      ? littleColorsFiltersByStatus[status] : darkColorsFiltersByStatus[status]
  )};
    left: 0px;
    position: absolute;
    top: 0;
  }

  div {
    left: -42px;
    position: absolute;
    top: -15px;
    width: 110px;
  }

  :hover {
    box-shadow: 0 2px rgba(0, 0, 0, 0.1);
    top: 30.5px;
  }

  :active {
    box-shadow: none;
    top: 32.5px;
  }

  :disabled {
    background: none;
    box-shadow: none;
  }
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  border-radius: 3px;
  box-shadow: 0 3px rgba(255, 0, 0, 0.4);
  color: rgba(255, 0, 0, 0.5);
  font-size: 22px;
  height: 20px;
  overflow: hidden;
  position: absolute;
  right: 4px;
  top: 2px;
  transition-duration: 200ms;
  width: 20px;

  .remove-icon {
    left: -1px;
    position: absolute;
    top: -1px;
  }

  div {
    left: -39px;
    opacity: 50%;
    overflow: auto;
    position: relative;
    top: -12px;
    width: 85px;
  }

  :hover {
    box-shadow: 0 2px rgba(255, 0, 0, 0.4);
    top: 3px;
  }

  :active, :disabled {
    box-shadow: none;
    top: 5px;
  }
`;

export const StatusChangeBar = styled.div`
  background-color: ${({ status }) => darkColorsByStatus[status]};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1px;
  ${({ show }) => {
    let result = '';
    if (show) {
      result += 'padding: 10px 0px 8px 0px; margin-top: -7px;';
    } else {
      result += 'height: 0px; padding: 0px; margin-top: 0px;';
    }
    return result;
  }}
  overflow: hidden;
  position: relative;
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.49, 0.62, 1, 0.07);
  z-index: -3;
`;

export const StatusChangeBarButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  border-radius: 5px;
  box-shadow: 0 3px ${({ textColor }) => textColor};
  color: ${({ textColor }) => textColor};
  font-size: 16px;
  height: 20px;
  line-height: 20px;
  padding: 0;
  position: relative;
  text-align: center;
  transition-duration: 200ms;
  width: ${({ width }) => width || '90px'};

  :hover {
    box-shadow: 0 2px ${({ textColor }) => textColor};
    top: 1px;
  }

  :active {
    box-shadow: none;
    top: 3px;
  }

  :disabled {
    background-color: rgba(0, 0, 0, 0.3);
    box-shadow: none;
    color: ${({ status }) => darkColorsByStatus[status]};
    top: 0px;
  }
`;

export const DescriptionContainer = styled.div`
  background-color: ${colorByStatus};
  border: 2px solid ${borderColorByStatus};
  border-radius: 3px;
  border-top: 0;
  height: auto;
  margin-bottom: 3px;
  margin-top: -21px;
  ${({ status, isEditing }) => {
    if (isEditing) {
      return `background-color: ${colorByStatus({ status, isEditing })};`;
    }
  }}
  ${({ show }) => show && 'margin-bottom: 0px; padding-top: 20px;'}
  overflow: hidden;
  position: relative;
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0.49, 0.62, 1, 0.07);

  textarea {
    background-color: none;
    ${({ show }) => {
    if (!show) {
      return `
        height: 0px !important;
        padding: 0;
      `;
    }
  }}
    overflow-y: hidden;
    padding: 5px;
    padding-top: 7px;
    text-align: center;
    text-decoration: none;
    transition-duration: 200ms;

    ::placeholder {
      color: ${colorByStatus};
    }
  }

  :before {
    background-color: rgba(0, 0, 0, 0.15);
    content: '';
    height: 100%;
    position: absolute;
    width: 100%;
  }
`;
