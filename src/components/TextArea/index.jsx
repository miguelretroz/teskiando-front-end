import React, { useEffect, useRef } from 'react';

import TextAreaStyle from './style';

function TextArea(props) {
  const textAreaRef = useRef(null);

  // Reference -> https://codepen.io/mike-schultz/pen/NgQvGO
  const handleTextAreaSize = () => {
    textAreaRef.current.style.cssText = 'heigh: auto;';
    textAreaRef.current.style.cssText = `height: ${textAreaRef.current.scrollHeight}px;`;
  };

  useEffect(() => {
    handleTextAreaSize();
    // Reference -> https://stackoverflow.com/questions/19014250/rerender-view-on-browser-resize-with-react
    window.addEventListener('resize', handleTextAreaSize);
  }, []);

  return (
    <TextAreaStyle
      ref={ textAreaRef }
      onKeyDown={ handleTextAreaSize }
      { ...props }
    />
  );
}

export default TextArea;
