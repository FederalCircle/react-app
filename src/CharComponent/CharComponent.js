import React from 'react';
import styles from './CharComponent.css';

function charComponent(props) {
  return (
    <div
      className={styles.CharComponent}
      onClick={()=>props.clickHandler(props.index)}
    >
      <span>{props.char}</span>
    </div>
  );
}

export default charComponent;
