import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Palette from '../Palette/Palette';

class App extends Component {
  constructor() {
    super()
    this.state = {
      color1: 'blue',
      color2: 'green',
      color3: 'yellow',
      color4: 'red',
      color5: 'purple'
    }
  }
  render() {
    return(
      <div className="App">
        <Nav />
        <main>
          <Palette
            color1={this.state.color1}
            color2={this.state.color2}
            color3={this.state.color3}
            color4={this.state.color4}
            color5={this.state.color5}
          />
        </main>
       
      </div>
    );
  }
}

export default App;
