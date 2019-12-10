import React from 'react';
import './Projects.scss';

const Projects = (props) => {
const projects = props.projects

  const getProjectNames = () => {
    return projects.map((project) => {
      return <h2>{project.name.toUpperCase()}</h2>
    })
  }

  return (
    <section className="Projects">
      {getProjectNames()}
    </section>
  )
}

export default Projects;
