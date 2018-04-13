import React from 'react';

function validationComponent(props) {
  let textComplement = props.textLength < 5 ? 'too short!' : 'long enough...';
  return (
    <p>{'Text ' + textComplement}</p>
  )
}

export default validationComponent;
