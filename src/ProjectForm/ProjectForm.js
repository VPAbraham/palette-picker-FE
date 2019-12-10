import React, {Component} from 'react';
import './ProjectForm.scss';
import whitePlus from '../assets/images/plus_white.svg';


class ProjectForm extends Component {
  constructor(props) {
    super();
    this.state = {
      creatingProj: false
    }
  }

  render() {
    return(
      <section className="project-form">
        <div className="menu-items">
          <img src={whitePlus}
            onClick={() => this.setState({ creatingProj: !this.state.creatingProj })}
            alt="white plus symbol"
            className="modalPlus"
          />
          <h1>CREATE NEW PROJECT</h1>
        </div>
        {this.state.creatingProj &&
        <div className="proj-name-input">
          <input className="proj-name-input" placeholder="New Project Name"></input>
          <button>SUBMIT</button>
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