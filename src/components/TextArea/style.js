import styled from 'styled-components';

import { littleColorsByStatus } from 'helpers/colors/taskCard';

export default styled.textarea`
  background: none;
  border: none;
  color: ${({ status }) => littleColorsByStatus[status]};
  font-size: 1.25em;
  font-weight: 700;
  overflow: hidden;
  padding: 26.5px 5px 20px 67px;
  position: relative;
  resize: none;
  text-decoration: ${
  ({ status }) => ((status === 'finished') ? 'line-through' : 'none')
};
  width: 100%;
  word-break: break-word;

  :read-only {
    color: rgba(0, 0, 0, 0.4);
  }
`;
