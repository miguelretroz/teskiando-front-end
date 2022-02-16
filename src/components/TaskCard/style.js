import styled from 'styled-components';

const statusLittleColors = {
  'A fazer': '#feffd6',
  'Em progresso': '#d6f1ff',
  Concluído: '#d6ffd6',
};

const statusBorderColors = {
  'A fazer': '#cacdae',
  'Em progresso': '#77d1ff',
  Concluído: '#88e6a3',
};

export default styled.div`
  background-color: ${({ status }) => statusLittleColors[status]};
  border: 2px solid ${({ status }) => statusBorderColors[status]};
  border-radius: 5px;
  box-shadow: 0 2px 6px ${({ status }) => statusBorderColors[status]};
  display: flex;
  flex-direction: column;
  height: 75px;
  margin-bottom: 1px;
  position: relative;
  width: 100vw;
  z-index: 2;

  span:nth-child( 1 ) {
    background-color: ${({ status }) => statusBorderColors[status]};
    border-bottom-right-radius: 5px;
    color: ${({ status }) => statusLittleColors[status]};
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
  }

  span:nth-child( 2 ) {
    background-color: ${({ status }) => statusBorderColors[status]};
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: ${({ status }) => statusLittleColors[status]};
    padding-left: 15px;
    padding-right: 15px;
    position: absolute;
    right: 35px;
  }

  span:nth-child( 3 ), input:nth-child( 3 ) {
    color: #80849b;
    font-weight: 700;
    left: 50px;
    position: absolute;
    text-decoration: ${
  ({ status }) => ((status === 'Concluído') ? 'line-through' : 'none')
};
    top: 30px;
  }

  input:nth-child( 3 ) {
    background: none;
    border: none;
    font-size: 16px;
    left: 48px;
    top: 24px;
  }

  button {
    background: none;
    border: none;
  }

  button:nth-child( 4 ) {
    background: none;
    border: none;
    height: 26px;
    left: 8px;
    position: absolute;
    top: 24px;
    width: 26px;

    img {
      left: 0px;
      position: absolute;
      top: 0;
    }
  }

  button:nth-child( 5 ) {
    color: #ff8e8e;
    font-size: 18px;
    height: 18px;
    position: absolute;
    right: 3px;
    top: 6px;
    width: 18px;

    svg {
      left: 0;
      position: absolute;
      top: 0;
    }
  }

  button:nth-child( 6 ) {
    color: ${({ status }) => statusBorderColors[status]};
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
  background-color: ${({ status }) => statusBorderColors[status]};
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  display: flex;
  justify-content: space-around;
  margin-bottom: 1px;
  ${({ show }) => {
    if (show) {
      return `
        height: 35px;
        padding-top: 10px;
        margin-top: -7px;
      `;
    }
    return `
      height: 0px;
      padding-top: 0px;
      margin-top: 0px;
    `;
  }}
  overflow: hidden;
  transition-duration: 250ms;
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
`;
