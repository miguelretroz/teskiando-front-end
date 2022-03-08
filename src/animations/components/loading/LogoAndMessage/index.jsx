import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import {
  loading,
} from 'animations/lottieFiles';
import
AnimationsContainer,
{
  LoadingLogoContainer,
  LoadingMessageContainer,
} from './style';

function LoadingLogoAndMessage() {
  const loadingLogo = useRef(null);
  const loadingMessage = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: loadingLogo.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loading.teskiando.minLogo,
    });
    lottie.loadAnimation({
      container: loadingMessage.current,
      animationData: loading.teskiando.loadingMessage,
    });
  }, []);
  return (
    <AnimationsContainer>
      <LoadingLogoContainer ref={ loadingLogo } />
      <LoadingMessageContainer ref={ loadingMessage } />
    </AnimationsContainer>
  );
}

export default LoadingLogoAndMessage;
