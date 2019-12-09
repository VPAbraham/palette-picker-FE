import React, { Component } from 'react';
import './PaletteForm.scss';

class PaletteForm extends Component {
  constructor(props) {
    super();
    this.state = {
      paletteName: '',
      projectName: '',
      error: ''
    }
    this.props = props;
  }

  submitForm = (e) => {
    e.preventDefault();
    if (!this.state.paletteName && !this.state.projectName) {
      this.setState({ error: "Please fill out all inputs to log in."} )
    } else {
      // where to put project id?
      let newPalette = {
        name: this.state.paletteName,
        color1: this.props.color1,
        color2: this.props.color2,
        color3: this.props.color3,
        color4: this.props.color4,
        color5: this.props.color5
      }
      // POST to the DB
      this.resetAllInputs()
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value} )
  }

  handleClick = (e) => {
    e.preventDefault();
    var selectedProject = document.querySelector(".drop-menu");
    selectedProject.innerText = e.target.innerText
    this.setState({ projectName: e.target.innerText })
  }

  resetAllInputs = () => {
    var selectedProject = document.querySelector(".drop-menu");
    selectedProject.innerText = "Select Project"
    this.setState({
      paletteName: '',
      projectName: '',
      error: ''
    })
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
        <h2>SELECT PROJECT</h2>
        <div className="dropdown">
          <button className="drop-menu">Select Project</button>
          <div className="dropdown-content">
            <a onClick={this.handleClick}>Neature</a>
          </div>
          <button className="save-palette" onClick={(e) => this.submitForm(e)}> SAVE </button>
        </div>
      </form>
    )
  }
}

export default PaletteForm;
