import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  body, main {
    overflow: hidden;
  }
`;

export const MainContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  max-height: 540px;
  overflow: hidden;
`;

export const AnimationContainer = styled.div`
  height: 23.438vw;
  max-height: 105.47px;
  max-width: 450px;
  opacity: ${({ opacity }) => opacity || '100%'};
  width: 100vw;
`;
