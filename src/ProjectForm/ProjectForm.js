import React, {Component} from 'react';
import './ProjectForm.scss';
import Projects from '../Projects/Projects';
import { postProject } from '../apiCalls/apiCalls';
import whitePlus from '../assets/images/plus_white.svg';
import whiteClose from '../assets/images/close_white.svg';


export class ProjectForm extends Component {
  constructor() {
    super();
    this.state = {
      creatingProj: false,
      viewingProj: false,
      newProjName: '',
      projects: [],
      palettes: []
    }
  }

  componentDidMount() {
    this.setState({
      projects: this.props.projects,
      palettes: this.props.palettes
    })
  }


  handleChange = (e) => {
    e.preventDefault();
    this.setState({ newProjName: e.target.value })
  }

  submitProject = (e) => {
    e.preventDefault();
    if(this.state.newProjName.length !== 0) {
      const projectObj = {
        name: this.state.newProjName
      }
      postProject(projectObj)
      this.setState({newProjName: ''})
    }
  }

  removeProject = (id) => {
    const currentProjects = this.state.projects;
    let newProjects = currentProjects.filter(project => {
      return project.id !== id
    })
    this.setState({projects: newProjects})
  }

  removePalette = (id) => {
    const currentPalettes = this.state.palettes;
    let newPalettes = currentPalettes.filter(palette => {
      return palette.id !== id
    })
    this.setState({palettes: newPalettes})
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
          <div className="project-dropdown">
            <h2>PROJECT NAME</h2>
            <div className="proj-name-input">
              <input className="proj-name-input"
              value={this.state.newProjName}
              onChange={(e) => this.handleChange(e)}
              placeholder="New Project Name">
              </input>
              <button onClick={(e) => this.submitProject(e)}>SUBMIT</button>
            </div>
          </div>
        }
        <div className="menu-items">
          <img src={this.state.viewingProj ? whiteClose : whitePlus}
          onClick={() => this.setState({ viewingProj: !this.state.viewingProj })}
          alt="white plus symbol"
          className="modalPlus" />
          <h1>VIEW ALL PROJECTS</h1>
        </div>
        {this.state.viewingProj &&
          <Projects
            palettes={this.state.palettes}
            projects={this.state.projects}
            removeProject={this.removeProject}
            removePalette={this.removePalette}
            hover={this.props.hover}
            selectPalette={this.props.selectPalette}
          />
        }
      </section>
    )
  }
}

export default ProjectForm;
