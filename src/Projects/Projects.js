import React from 'react';
import Color from '../Color/Color';
import './Projects.scss';
import { deletePalette } from '../apiCalls/apiCalls';

const Projects = (props) => {
  const projects = props.projects
  const palettes = props.palettes

  const displayProjects = () => {
    return projects.map((project) => {
      let specPal = palettes.filter((palette) => {
        return palette.projects_id === project.id
      })
      let palmap = specPal.map((pal) => {
        return <div className="palList">
          <Color key="1" id="colorSmall" className="color" color={pal.color1} />
          <Color key="2" id="colorSmall" className="color" color={pal.color2} />
          <Color key="3" id="colorSmall" className="color" color={pal.color3} />
          <Color key="4" id="colorSmall" className="color" color={pal.color4} />
          <Color key="5" id="colorSmall" className="color" color={pal.color5} />
          <h4>{pal.name.toUpperCase()}</h4>
          <button className="modal-delete" onClick={() => deletePalette(pal.id)}>DELETE</button>
        </div>
      })
      return <div>
        <div className="projList">
          <h2>{project.name.toUpperCase()}</h2>
          <button className="modal-delete">DELETE</button>
        </div>
        {palmap}
      </div>
    })
  }

  return (
    <section className="Projects">
      <div>
        {displayProjects()}
      </div>
    </section>
  )
}

export default Projects;
