import styled from 'styled-components';

import { littleColorsByStatus } from 'helpers/colors/taskCard';

export default styled.textarea`
  background: none;
  border: none;
  color: ${({ status }) => littleColorsByStatus[status]};
  font-size: 20px;
  font-weight: 700;
  padding: 30px 5px 20px 40px;
  position: relative;
  resize: none;
  text-decoration: ${
  ({ status }) => ((status === 'Concluído') ? 'line-through' : 'none')
};
  width: 100%;
  word-break: break-word;

  :read-only {
    color: rgba(0, 0, 0, 0.4);
  }
`;
