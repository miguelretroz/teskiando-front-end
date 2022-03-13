import React, { useEffect, useRef } from 'react';
import { bool, object } from 'prop-types';
import lottie from 'lottie-web';

function LottieWrapper({ loop, autoplay, animationData }) {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: 'svg',
      loop,
      autoplay,
      animationData,
    });
  }, [loop, autoplay, animationData]);
  return (
    <div ref={ animationContainer } />
  );
}

LottieWrapper.propTypes = {
  loop: bool.isRequired,
  autoplay: bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  animationData: object.isRequired,
};

export default LottieWrapper;
