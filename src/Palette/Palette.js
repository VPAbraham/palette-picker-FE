import React, { Component } from 'react';
import Color from '../Color/Color';
import './Palette.scss';

class Palette extends Component {
  constructor() {
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

  static getDerivedStateFromProps(nextProps, prevState){
    const { color1, color2, color3, color4, color5 } = nextProps;
    if(nextProps.color1 !== prevState.color1) {
      return {
        color1: color1,
        color2: color2,
        color3: color3,
        color4: color4,
        color5: color5,
      }
    }
  }
  

  render() {
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
