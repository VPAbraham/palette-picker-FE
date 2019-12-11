import React, { Component } from 'react';
import './PaletteForm.scss';
import { postPalette } from '../apiCalls/apiCalls';
import whitePlus from '../assets/images/plus_white.svg';
import whiteClose from '../assets/images/close_white.svg';

class PaletteForm extends Component {
  constructor(props) {
    super();
    this.state = {
      paletteName: '',
      projectName: '',
      error: '',
      savingPalette: false
    }
    this.props = props;
  }

  getProjectNames = () => {
    return this.props.projects.map((project) => {
      return <a onClick={this.handleClick}>{project.name}</a>
    })
  }

  getSelectedProjectId = () => {
    let selectedProject = this.props.projects.find((project) => {
      return project.name === this.state.projectName
    })
    return selectedProject.id
  }

  submitForm = (e) => {
    e.preventDefault();
    if (!this.state.paletteName && !this.state.projectName) {
      this.setState({ error: "Please fill out all inputs to log in."} )
    } else {
      let newPalette = {
        name: this.state.paletteName,
        projects_id: this.getSelectedProjectId(),
        color1: this.props.color1,
        color2: this.props.color2,
        color3: this.props.color3,
        color4: this.props.color4,
        color5: this.props.color5
      }
      postPalette(newPalette)
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

  doNothing = (e) => {
    e.preventDefault();
  }

  render() {
    return(
      <form className="palette-form">
        <div className="menu-items">
          <img src={this.state.savingPalette ? whiteClose : whitePlus}
          onClick={() => this.setState({ savingPalette: !this.state.savingPalette})}
          alt="white plus symbol"
          className="modalPlus" />
          <h1>SAVE PALETTE</h1>
        </div>
        {this.state.savingPalette &&
        <div className="palette-dropdown">
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
            <button className="drop-menu" onClick={(e) => this.doNothing(e)}>Select Project</button>
            <div className="dropdown-content">
              {this.getProjectNames()}
            </div>
          </div>
          <button className="save-palette" onClick={(e) => this.submitForm(e)}> SAVE </button>
        </div>
        }
      </form>
    )
  }
}

export default PaletteForm;
