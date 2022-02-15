import styled from 'styled-components';

export default styled.div`
  background-color: #feffd6;
  border: 2px solid #c7caac;
  border-radius: 5px;
  box-shadow: 0 2px 6px #c7caac;
  display: flex;
  flex-direction: column;
  font-weight: 700;
  height: 75px;
  margin-bottom: 1px;
  position: relative;
  width: 320px;

  span:nth-child( 1 ) {
    background-color: #c7caac;
    border-bottom-right-radius: 5px;
    color: #feffd6;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;
  }

  span:nth-child( 2 ) {
    background-color: #c7caac;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    color: #feffd6;
    padding-left: 15px;
    padding-right: 15px;
    position: absolute;
    right: 35px;
  }

  span:nth-child( 3 ) {
    color: #80849b;
    font-weight: 700;
    left: 50px;
    position: absolute;
    top: 30px;
  }

  button {
    background: none;
    border: none;
  }

  button:nth-child( 4 ) {
    background: none;
    border: none;
    height: 26px;
    position: absolute;
    top: 9px;
    width: 26px;

    img {
      left: 6px;
      position: absolute;
    }
  }

  button:nth-child( 5 ) {
    color: #ff8e8e;
    font-size: 18px;
    height: 18px;
    position: absolute;
    right: 5px;
    top: 6px;
    width: 18px;

    svg {
      left: 1px;
      position: absolute;
      top: 2px;
    }
  }

  button:nth-child( 6 ) {
    color: #c7caac;
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
