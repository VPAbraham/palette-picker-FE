import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Palette from '../Palette/Palette';

class App extends Component {
  constructor() {
    super()
    this.state = {

    }
  }
  render() {
    return(
      <div className="App">
        <Nav />
      </div>
    );
  }
}

export default App;
