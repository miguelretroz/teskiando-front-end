import React from 'react';

import TaskCardAnimation from 'animations/components/TaskCard';

import AnimationContainer from './style';

function LoadingTaskList() {
  return (
    <div>
      <AnimationContainer opacity="100%">
        <TaskCardAnimation />
      </AnimationContainer>

      <AnimationContainer opacity="90%">
        <TaskCardAnimation speed="2.5s" />
      </AnimationContainer>

      <AnimationContainer opacity="60%">
        <TaskCardAnimation />
      </AnimationContainer>

      <AnimationContainer opacity="40%">
        <TaskCardAnimation speed="2.5s" />
      </AnimationContainer>

      <AnimationContainer opacity="20%">
        <TaskCardAnimation />
      </AnimationContainer>

      <AnimationContainer opacity="10%">
        <TaskCardAnimation />
      </AnimationContainer>
    </div>
  );
}

export default LoadingTaskList;
