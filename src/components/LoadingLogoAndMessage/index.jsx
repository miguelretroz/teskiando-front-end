import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import { lottieFiles } from 'animations';
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
      animationData: lottieFiles.teskiandoLoadingLogo,
    });
    lottie.loadAnimation({
      container: loadingMessage.current,
      animationData: lottieFiles.teskiandoLoadingMessage,
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
