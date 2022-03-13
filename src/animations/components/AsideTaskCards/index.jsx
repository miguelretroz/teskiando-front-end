import React from 'react';
import { number } from 'prop-types';

import { useWindowSize } from 'hooks';
import LottieWrapper from '../LottieWrapper';
import { asideTaskCardsRot } from '../../lottieFiles';

import AsideAnimationContainer from './style';

function AsideTaskCards({ asideMinSize }) {
  const { width } = useWindowSize();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {
        width >= asideMinSize
        && (
          <AsideAnimationContainer>
            <LottieWrapper
              loop={ false }
              autoplay
              animationData={ asideTaskCardsRot }
            />
          </AsideAnimationContainer>
        )
      }
    </>
  );
}

AsideTaskCards.defaultProps = {
  asideMinSize: 900,
};

AsideTaskCards.propTypes = {
  asideMinSize: number,
};

export default AsideTaskCards;
