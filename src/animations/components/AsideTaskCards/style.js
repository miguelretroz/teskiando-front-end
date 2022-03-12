import styled from 'styled-components';

const AsideAnimationContainer = styled.aside`
  background-color: #e2e7ff;
  display: flex;
  height: 100vh;
  justify-content: center;
  padding-left: 30px;
  padding-right: 30px;
  width: 150vw;

  div {
    width: 51.95vw;
  }

  @media screen and ( min-width : 1360px ) {
    width: 221vw;
  }
`;

export default AsideAnimationContainer;
