import React, { Component } from 'react';
import './UserOutput.css';

const userOutput = (props) => {
  return (
    <div className="UserOutput">
      <p>Username: <span class="red">{props.userName}</span></p>
    </div>
  );
}

export default userOutput;
