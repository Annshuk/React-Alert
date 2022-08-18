import React from 'react';
import { useSpring, animated } from 'react-spring';

const UnorderList = () => {
  const [styles, api] = useSpring(() => ({ opacity: 1 }));

  return (
    <animated.div style={styles}>
      <ul>
        <li>text 1</li>
        <li>text 1</li>
        <li>text 1</li>
        <li>text 1</li>
        <li>text 1</li>
        <li>text 1</li>
      </ul>
    </animated.div>
  );
};

export default UnorderList;
