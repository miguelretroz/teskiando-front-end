import React, { useEffect, useRef } from 'react';
import lottie from 'lottie-web';

import { lottieFiles } from 'animations';

function LoadingSpinner() {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: lottieFiles.loadingSpinnerWhite,
    });
  }, []);

  return <div ref={ animationContainer } />;
}

export default LoadingSpinner;
