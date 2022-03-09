import React, { useEffect, useRef, useCallback } from 'react';
import { number } from 'prop-types';

import TextAreaStyle from './style';

function TextArea({ maxLength, ...props }) {
  const textAreaRef = useRef(null);

  // Reference -> https://codepen.io/mike-schultz/pen/NgQvGO
  const handleTextAreaSize = useCallback(
    () => {
      if (maxLength) textAreaRef.current.setAttribute('maxlength', maxLength);
      setTimeout(() => {
        textAreaRef.current.style.cssText = 'heigh: auto;';
        textAreaRef.current
          .style.cssText = `height: ${textAreaRef.current.scrollHeight}px;`;
      }, 0);
    },
    [maxLength],
  );

  useEffect(() => {
    handleTextAreaSize();
    // Reference -> https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
    window.addEventListener('resize', handleTextAreaSize);
  }, [handleTextAreaSize]);

  return (
    <TextAreaStyle
      ref={ textAreaRef }
      onKeyDown={ handleTextAreaSize }
      { ...props }
    />
  );
}

TextArea.defaultProps = {
  maxLength: 0,
};

TextArea.propTypes = {
  maxLength: number,
};

export default TextArea;
