import styled from 'styled-components';

export const AnimationsContainer = styled.div`
  padding-top: 2px;
`;

export default styled.div`
  opacity: ${({ opacity }) => opacity || '100%'};
  padding-left: 2px;
  padding-right: 2px;
`;
