import React, { Component } from 'react';
import './PaletteForm.scss';

class PaletteForm extends Component {
  constructor() {
    super();
    this.state = {
      paletteName: '',
      projectName: ''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return(
      <form className="palette-form"> 
        <h2>PALETTE NAME</h2>
        <input
          className="palette-name-input"
          type="text"
          placeholder="Enter Palette Name"
          name="palette-name"
          value={this.state.paletteName}
          onChange={this.handleChange}
        />
        <button className="save-palette" onClick={(e) => this.submitForm(e)}> SAVE </button>
      </form>
    )
  }
}

export default PaletteForm;
