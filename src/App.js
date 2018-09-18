import React, { Component } from 'react';
import styles from './App.css';

import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: 'I\'m back!'
  }

  textChangeHandler = (event) => {
    this.setState({
      text: event.target.value,
    });
  }

  charClickHandler = (index) => {
    let charArray = this.state.text.split('');
    charArray.splice(index, 1);
    this.setState({
      text: charArray.join('')
    });
  }

  render() {
    let charArray = this.state.text.split('');
    let textLength = this.state.text.length;
    return (
      <div className={styles.App}>
        <h1>React App</h1>
        <input
          type="text"
          onChange={this.textChangeHandler}
          value={this.state.text}
        />
        <p>{textLength}</p>
        <ValidationComponent textLength={textLength} />
        {
          charArray.map( (char, index) => {
            return (
              <CharComponent
                char={char}
                index={index}
                key={index}
                clickHandler={this.charClickHandler}
              />
            );
          })
        }
      </div>
    );
  }
}

export default App;
