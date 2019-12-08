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
    e.preventDefault();
    this.setState({[e.target.name]: e.target.value})
  }

  handleClick = (e) => {
    e.preventDefault();
    console.log('hello')
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
        <h2>SELECT PROJECT</h2>
        <div className="dropdown">
          <button className="drop-menu">Select Project</button>
          <div className="dropdown-content">
            <a onClick={this.handleClick}>Link 1</a>
          </div>
        </div>
      </form>
    )
  }
}

export default PaletteForm;
