import styled from 'styled-components';

const littleColorsByStatus = {
  'A fazer': '#feffd6',
  'Em progresso': '#d6f1ff',
  Concluído: '#d6ffd6',
};

const darkColorsByStatus = {
  'A fazer': '#b5b798',
  'Em progresso': '#74aac8',
  Concluído: '#78c78f',
};

// ---References---
// stack overflow -> https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element?page=1&tab=votes#tab-top
// stack overflow -> https://stackoverflow.com/questions/42966641/how-to-transform-black-into-any-given-color-using-only-css-filters/43960991#43960991
// Hex to Filter convert -> https://codepen.io/sosuke/pen/Pjoqqp
const statusIconLittleColorsFilters = {
  'A fazer': `invert(90%) sepia(57%)
    saturate(195%) hue-rotate(335deg) brightness(106%) contrast(103%);`,
  'Em progresso': `invert(99%) sepia(81%)
    saturate(4827%) hue-rotate(175deg) brightness(104%) contrast(107%);`,
  Concluído: `invert(98%) sepia(7%)
    saturate(1093%) hue-rotate(52deg) brightness(99%) contrast(104%);`,
};

const statusIconDarkColorsFilters = {
  'A fazer': `invert(89%) sepia(4%)
    saturate(1308%) hue-rotate(25deg) brightness(82%) contrast(87%);`,
  'Em progresso': `invert(77%) sepia(13%)
    saturate(1155%) hue-rotate(163deg) brightness(82%) contrast(88%);`,
  Concluído: `invert(100%) sepia(21%)
    saturate(7349%) hue-rotate(55deg) brightness(147%) contrast(56%);`,
};

const colorByStatus = ({ status, isEditing }) => (
  isEditing ? darkColorsByStatus[status] : littleColorsByStatus[status]
);

const borderColorByStatus = ({ status, isEditing }) => (
  isEditing ? littleColorsByStatus[status] : darkColorsByStatus[status]
);

export default styled.div`
  background-color: ${colorByStatus};
  border: 2px solid ${borderColorByStatus};
  border-radius: 5px;
  box-shadow: 0 2px 6px ${({ status }) => darkColorsByStatus[status]};
  display: flex;
  flex-direction: column;
  height: 75px;
  margin-bottom: 1px;
  overflow-x: hidden;
  position: relative;
  transition: 200ms;
  width: 100%;
  z-index: 2;

  span:nth-child( 1 ) {
    background-color: ${borderColorByStatus};
    border-bottom-right-radius: 5px;
    color: ${colorByStatus};
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
  }

  span:nth-child( 2 ) {
    background-color: ${borderColorByStatus};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: ${colorByStatus};
    padding-left: 15px;
    padding-right: 15px;
    position: absolute;
    right: 28px;
  }

  span:nth-child( 3 ) {
    width: 240px;
  }

  span:nth-child( 3 ), input:nth-child( 3 ) {
    color: ${({ status, isEditing }) => (
    isEditing ? littleColorsByStatus[status] : 'rgba(0, 0, 0, 0.4)'
  )};
    font-size: 20px;
    font-weight: 700;
    left: 50px;
    position: absolute;
    text-decoration: ${
  ({ status }) => ((status === 'Concluído') ? 'line-through' : 'none')
};
    top: 33px;
  }

  input:nth-child( 3 ) {
    background: none;
    border: none;
    left: 48px;
    padding-right: 5px;
    top: 26px;
    width: 240px;
  }

  button {
    background: none;
    border: none;
  }

  button:nth-child( 4 ) {
    background: none;
    border: none;
    height: 28px;
    left: 8px;
    overflow: hidden;
    position: absolute;
    top: 29.5px;
    width: 26px;

    img, div {
      filter: ${({ status, isEditing }) => (
    isEditing
      ? statusIconLittleColorsFilters[status] : statusIconDarkColorsFilters[status]
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
  }

  button:nth-child( 5 ) {
    color: rgba(255, 0, 0, 0.5);
    font-size: 22px;
    height: 22px;
    overflow: hidden;
    position: absolute;
    right: 3px;
    top: 3px;
    width: 22px;

    .remove-icon {
      left: 0;
      position: absolute;
      top: 0;
    }

    div {
      left: -37px;
      opacity: 50%;
      overflow: auto;
      position: relative;
      top: -12px;
      width: 85px;
    }
  }

  button:nth-child( 6 ) {
    color: ${borderColorByStatus};
    font-size: 22px;
    height: 22px;
    position: absolute;
    right: 3px;
    top: 46px;
    width: 22px;

    svg {
      left: 0px;
      margin-top: -11px;
      position: absolute;
    }
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
      result += `
        height: 35px;
        padding-top: 10px;
        margin-top: -7px;
      `;
    } else {
      result += `
        height: 0px;
        padding-top: 0px;
        margin-top: 0px;
      `;
    }
    return result;
  }}
  overflow: hidden;
  position: relative;
  transition-duration: 100ms;
  transition-timing-function: cubic-bezier(0.49, 0.62, 1, 0.07);
`;

export const StatusChangeBarButton = styled.button`
  background-color: ${({ bgColor }) => bgColor};
  border: none;
  border-radius: 5px;
  color: ${({ textColor }) => textColor};
  font-size: 16px;
  height: 20px;
  line-height: 20px;
  padding: 0;
  text-align: center;
  width: ${({ width }) => width || '90px'};

  :disabled {
    background-color: rgba(0, 0, 0, 0.3);
  }
`;
