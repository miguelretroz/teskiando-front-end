/* eslint-disable no-magic-numbers */
import React from 'react';
import { number } from 'prop-types';

import TaskCardAnimation from 'animations/components/TaskCard';

import AnimationContainer, { AnimationsContainer } from './style';

function TaskList({ speedMultiplier }) {
  return (
    <AnimationsContainer>
      <AnimationContainer opacity="100%">
        <TaskCardAnimation speed={ `${speedMultiplier * 2}s` } />
      </AnimationContainer>

      <AnimationContainer opacity="90%">
        <TaskCardAnimation speed={ `${speedMultiplier * 2.2}s` } />
      </AnimationContainer>

      <AnimationContainer opacity="60%">
        <TaskCardAnimation speed={ `${speedMultiplier * 2.4}s` } />
      </AnimationContainer>

      <AnimationContainer opacity="40%">
        <TaskCardAnimation speed={ `${speedMultiplier * 2.6}s` } />
      </AnimationContainer>

      <AnimationContainer opacity="20%">
        <TaskCardAnimation speed={ `${speedMultiplier * 2.8}s` } />
      </AnimationContainer>

      <AnimationContainer opacity="10%">
        <TaskCardAnimation speed={ `${speedMultiplier * 3}s` } />
      </AnimationContainer>
    </AnimationsContainer>
  );
}

TaskList.defaultProps = {
  speedMultiplier: 1,
};

TaskList.propTypes = {
  speedMultiplier: number,
};

export default TaskList;
