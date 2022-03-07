import React, { useEffect, useRef } from 'react';
import { string } from 'prop-types';
import lottie from 'lottie-web';

import { lottieFiles } from 'animations';

const animationData = {
  white: lottieFiles.loadingSpinnerWhite,
  red: lottieFiles.loadingSpinnerRed,
};

function LoadingSpinner({ color }) {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData[color],
    });
  }, [color]);

  return <div ref={ animationContainer } />;
}

LoadingSpinner.defaultProps = {
  color: 'white',
};

LoadingSpinner.propTypes = {
  color: string,
};

export default LoadingSpinner;
