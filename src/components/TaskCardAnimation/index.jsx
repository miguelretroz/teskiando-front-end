import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import { lottieFiles } from 'animations';

import PageGlobalStyle, { MainContainer, AnimationContainer } from './style';

function TaskCardAnimation() {
  const animationContainerOne = useRef(null);
  const animationContainerTwo = useRef(null);
  const animationContainerThree = useRef(null);
  const animationContainerFour = useRef(null);
  const animationContainerFive = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainerOne.current,
      animationData: lottieFiles.teskiandoTaskCardAnimation,
      name: 'animationOne',
    });
    const animationTwo = lottie.loadAnimation({
      container: animationContainerTwo.current,
      animationData: lottieFiles.teskiandoTaskCardAnimation,
    });
    animationTwo.setDirection('-1');
    lottie.loadAnimation({
      container: animationContainerThree.current,
      animationData: lottieFiles.teskiandoTaskCardAnimation,
    });
    const animationFour = lottie.loadAnimation({
      container: animationContainerFour.current,
      animationData: lottieFiles.teskiandoTaskCardAnimation,
    });
    animationFour.setDirection('-1');
    lottie.loadAnimation({
      container: animationContainerFive.current,
      animationData: lottieFiles.teskiandoTaskCardAnimation,
    });
  }, []);

  return (
    <MainContainer>
      <PageGlobalStyle />
      <AnimationContainer
        ref={ animationContainerOne }
      />
      <AnimationContainer
        ref={ animationContainerTwo }
        opacity="80%"
      />
      <AnimationContainer
        ref={ animationContainerThree }
        opacity="50%"
      />
      <AnimationContainer
        ref={ animationContainerFour }
        opacity="30%"
      />
      <AnimationContainer
        ref={ animationContainerFive }
        opacity="15%"
      />
    </MainContainer>
  );
}

export default TaskCardAnimation;
