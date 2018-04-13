import React, { Component } from 'react';
import './App.css';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state = {
    userName: 'Lorem Ipsum'
  }

  onChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React App</h1>
        <UserInput
          changeRef={this.onChangeHandler}
          userName={this.state.userName} />
        <UserOutput
          userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
