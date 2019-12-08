import React, { Component } from 'react';
import './PaletteForm.scss';

class PaletteForm extends Component {
  constructor() {
    super();
    this.state = {
      paletteName: '',
      projectName: '',
      error: ''
    }
  }

  submitForm = (e) => {
    e.preventDefault();
    if (!this.state.paletteName && !this.state.projectName) {
      this.setState({error: "Please fill out all inputs to log in."})
    } else {
      // send up to app state
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
          name="paletteName"
          value={this.state.paletteName}
          onChange={this.handleChange}
        />
        <button className="save-palette" onClick={(e) => this.submitForm(e)}> SAVE </button>
      </form>
    )
  }
}

export default PaletteForm;
