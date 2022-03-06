import { useState } from 'react';

const DEFAULT_DELAY = 500;

export default (delay = DEFAULT_DELAY) => {
  const [clickCount, setClickCount] = useState(0);
  const [clickTimeoutId, setClickTimeoutId] = useState();

  const handleDoubleClick = () => {
    if (clickCount === 0) {
      setClickTimeoutId(setTimeout(() => setClickCount(0), delay));
      setClickCount(1);
    } else {
      clearTimeout(clickTimeoutId);
      setClickCount(2);
    }
  };

  const resetClickCount = () => {
    setClickCount(0);
  };

  return {
    clickCount,
    isDoubleClickEnabled: clickCount === 2,
    handleDoubleClick,
    resetClickCount,
  };
};
