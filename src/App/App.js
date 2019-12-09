import React, { Component } from 'react';
import './App.scss';
import Nav from '../Nav/Nav';
import Palette from '../Palette/Palette';
import { getColors } from '../apiCalls/apiCallsColors';

class App extends Component {
  constructor() {
    super()
    this.state = {
      color1: 'blue',
      color2: 'green',
      color3: 'yellow',
      color4: 'red',
      color5: 'purple',
      randomizedPalette: null
    }
  }

  async componentDidMount() {
    const newPalette = await getColors();
    this.setState({
      randomizedPalette: newPalette
    });
  }

  componentDidUpdate() {
    const { randomizedPalette } = this.state;
    if(randomizedPalette === null){
      this.setState({
        color1: randomizedPalette[0],
        color2: randomizedPalette[1],
        color3: randomizedPalette[2],
        color4: randomizedPalette[3],
        color5: randomizedPalette[4]
      });
    };
  };




  render() {
    return(
      <div className="App">
        <Nav />
        <main>
          <Palette
            colors={this.state.randomizedPalette}
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
