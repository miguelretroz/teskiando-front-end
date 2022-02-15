import styled from 'styled-components';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 75px;
  width: 320px;

  button {
    background: none;
    border: none;
    height: 26px;
    width: 26px;

    img {
      left: -6px;
      position: relative;
      top: -2px;
    }
  }
`;

export default CardContainer;
