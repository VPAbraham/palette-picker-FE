import React from 'react';
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
        return <div className="palList"><h4>{pal.name.toUpperCase()}</h4><button className="modal-delete">DELETE</button></div>
      })
      return <div><div className="projList"><h2>{project.name.toUpperCase()}</h2><button className="modal-delete">DELETE</button></div>{palmap}</div>
    })
  }

  return (
    <section className="Projects">
      {displayProjects()}
    </section>
  )
}

export default Projects;
