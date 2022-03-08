import { useEffect, useState } from 'react';

export default (setTrueCondition, delayMs) => {
  const [isEnable, setIsEnable] = useState(false);

  useEffect(() => {
    if (setTrueCondition) setIsEnable(true);
  }, [setTrueCondition]);

  const disable = (disableDelayMs = 0) => {
    setTimeout(() => setIsEnable(false), delayMs || disableDelayMs);
  };

  return {
    isEnable,
    disable,
  };
};
