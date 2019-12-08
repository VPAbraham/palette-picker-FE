import React, { Component } from 'react';
import Color from '../Color/Color';
import './Palette.scss';

class Palette extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <section className="palette">
        <Color color="color1`"/>
        <Color color="color2"/>
        <Color color="color3"/>
        <Color color="color4"/>
        <Color color="color5"/>
      </section>
    )
  }
}

export default Palette;