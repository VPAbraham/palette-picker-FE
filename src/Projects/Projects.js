import React from 'react';
import './Projects.scss';

const Projects = (props) => {
  const projects = props.projects
  const palettes = props.palettes

  const displayProjects = () => {
    return projects.map((project) => {
      let specPal = palettes.filter((palette) => {
        return palette.projects_id === project.id
      })
      let palmap = specPal.map((pal) => {
        return <h4>{pal.name.toUpperCase()}</h4>
      })
      return <div><h2>{project.name.toUpperCase()}</h2>{palmap}</div>
    })
  }

  return (
    <section className="Projects">
      {displayProjects()}
    </section>
  )
}

export default Projects;
