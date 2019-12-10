import React, {Component} from 'react';
import './ProjectForm.scss';
import { postProject } from '../apiCalls/apiCalls';
import whitePlus from '../assets/images/plus_white.svg';
import whiteClose from '../assets/images/close_white.svg';


class ProjectForm extends Component {
  constructor(props) {
    super();
    this.state = {
      creatingProj: false,
      newProjName: ''
    }
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState({ newProjName: e.target.value })
  }

  submitProject = (e) => {
    e.preventDefault();
    if(this.newProjName !== 0) {
      const projectObj = {
        name: this.state.newProjName
      }
      console.log(projectObj)
      postProject(projectObj)
    }
  }

  render() {
    return(
      <section className="project-form">
        <div className="menu-items">
          <img src={this.state.creatingProj ? whiteClose : whitePlus}
            onClick={() => this.setState({ creatingProj: !this.state.creatingProj })}
            alt="white plus symbol"
            className="modalPlus"
          />
          <h1>CREATE NEW PROJECT</h1>
        </div>
        {this.state.creatingProj &&
        <div className="proj-name-input">
          <input className="proj-name-input" 
          onChange={(e) => this.handleChange(e)}
          placeholder="New Project Name">
          </input>
          <button onClick={(e) => this.submitProject(e)}>SUBMIT</button>
        </div>
        }
        <div className="menu-items">
          
          <img src={whitePlus} alt="white plus symbol" className="modalPlus" />
          <h1>VIEW ALL PROJECTS</h1>
        </div>
      </section>
    )
  }
}

export default ProjectForm;