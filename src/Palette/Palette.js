import React, { Component } from 'react';
import Color from '../Color/Color';
import './Palette.scss';

class Palette extends Component {
  constructor(props) {
    super()
    this.state = {
      color1: '',
      color2: '',
      color3: '',
      color4: '',
      color5: ''
    }
  }

  componentDidMount() {
    const { color1, color2, color3, color4, color5 } = this.props;
    this.setState({
      color1,
      color2,
      color3,
      color4,
      color5
    })
  }

  render() {
    console.log(this.props)

    return (
      <section className="palette">
        <Color position="color1" color={this.state.color1}/>
        <Color position="color2" color={this.state.color2}/>
        <Color position="color3" color={this.state.color3}/>
        <Color position="color4" color={this.state.color4}/>
        <Color position="color5" color={this.state.color5}/>
      </section>
    )
  }
}

export default Palette;