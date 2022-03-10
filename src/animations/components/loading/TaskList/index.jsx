import React from 'react';

import TaskCardAnimation from 'animations/components/TaskCard';

import AnimationContainer, { AnimationsContainer } from './style';

function LoadingTaskList() {
  return (
    <AnimationsContainer>
      <AnimationContainer opacity="100%">
        <TaskCardAnimation speed="2s" />
      </AnimationContainer>

      <AnimationContainer opacity="90%">
        <TaskCardAnimation speed="2.2s" />
      </AnimationContainer>

      <AnimationContainer opacity="60%">
        <TaskCardAnimation speed="2.4s" />
      </AnimationContainer>

      <AnimationContainer opacity="40%">
        <TaskCardAnimation speed="2.6s" />
      </AnimationContainer>

      <AnimationContainer opacity="20%">
        <TaskCardAnimation speed="2.8s" />
      </AnimationContainer>

      <AnimationContainer opacity="10%">
        <TaskCardAnimation speed="3s" />
      </AnimationContainer>
    </AnimationsContainer>
  );
}

export default LoadingTaskList;
