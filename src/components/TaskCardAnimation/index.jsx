import React from 'react';
import { string } from 'prop-types';
import dayjs from 'dayjs';

import CardContainer from './style';

function TaskCardAnimation({ speed }) {
  return (
    <CardContainer speed={ speed }>
      <span>{ dayjs().format('DD/MM/YY HH:mm') }</span>
      <span>Em progresso</span>
    </CardContainer>
  );
}

TaskCardAnimation.defaultProps = {
  speed: '2s',
};

TaskCardAnimation.propTypes = {
  speed: string,
};

export default TaskCardAnimation;
