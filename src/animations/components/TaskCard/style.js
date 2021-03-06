import styled from 'styled-components';

// -- References --
// Date and Status Bar gradient moviment -> https://www.gradient-animator.com/
// Card border gradient moviment -> https://codepen.io/mike-schultz/pen/NgQvGO
export default styled.div`
  background-color: #f6f6f6;
  border-left: 2px;
  border-radius: 4px;
  border-right: 2px;
  color: rgba(0, 0, 0, 0);
  display: flex;
  flex-direction: column;
  font-size: 1em;
  height: 82px;
  margin-bottom: 5.5px;
  position: relative;
  width: 100%;

  span:nth-child( 1 ) {
    border-bottom-right-radius: 5px;
    padding-left: 10px;
    padding-right: 10px;
    position: absolute;

    @media screen and ( min-width : 1360px ) {
      padding-bottom: 2px;
      padding-left: 12.5px;
      padding-right: 12.5px;
    }
  }

  span:nth-child( 2 ) {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    padding-left: 15px;
    padding-right: 15px;
    position: absolute;
    right: 28px;

    @media screen and ( min-width : 1360px ) {
      height: 22px;
      padding-bottom: 2px;
      padding-left: 18.75px;
      padding-right: 18.75px;
      right: 37.5px;
    }
  }

  --gradientFirstColor: #f6f6f6;

  --gradientSecondColor: #a5a5a5;

  --borderGradient: 270deg , var(--gradientFirstColor) , var(--gradientSecondColor);

  span:nth-child( 2 ), span:nth-child( 1 ) {
    animation: gradientMoviment ${({ speed }) => speed || '2s'} ease infinite;
    background: linear-gradient(var(--borderGradient));
    background-size: 400% 400%;
  }

  --borderWidth: 2px;

  :after {
    animation: gradientMoviment ${({ speed }) => speed || '2s'} ease infinite;
    background: linear-gradient(var(--borderGradient));
    background-size: 300% 300%;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(165, 165, 165, 0.6);
    content: '';
    height: calc(100% + var(--borderWidth) * 2);
    left: calc(-1 * var(--borderWidth));
    position: absolute;
    top: calc(-1 * var(--borderWidth));
    width: calc(100% + var(--borderWidth) * 2);
    z-index: -1;
  }

  @keyframes gradientMoviment {

    0% { background-position: 0% 50%; }

    50% { background-position: 100% 50%; }

    100% { background-position: 0% 50%; }
  }

  @media screen and ( min-width : 1360px ) {
    height: 97px;
  }
`;
