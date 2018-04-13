import React, { Component } from 'react';

const userInput = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={props.changeRef}
        value={props.userName}/>
    </div>
  );
}

export default userInput;
