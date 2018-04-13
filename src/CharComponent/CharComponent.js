import React from 'react';
import './CharComponent.css';

function charComponent(props) {
  return (
    <div
      className="CharComponent"
      onClick={()=>props.clickHandler(props.index)}
    >
      <span>{props.char}</span>
    </div>
  );
}

export default charComponent;
