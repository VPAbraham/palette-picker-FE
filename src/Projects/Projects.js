import React from 'react';
import './Projects.scss';
import { deletePalette, deleteProject } from '../apiCalls/apiCalls';



const Projects = (props) => {
  const { removeProject, removePalette, projects, palettes } = props;

  const delProj = async (projectId) => {
    await deleteProject(projectId);
    removeProject(projectId)
  }

  const delPal = async (paletteId) => {
    await deletePalette(paletteId);
    removePalette(paletteId)
  }

  const displayProjects = () => {
    return projects.map((project) => {
      let specPal = palettes.filter((palette) => {
        return palette.projects_id === project.id
      })
      let palmap = specPal.map((pal) => {
        return <div className="palList"><h4>{pal.name.toUpperCase()}</h4><button className="modal-delete" onClick={() => delPal(pal.id)}>DELETE</button></div>
      })
      return <div>
          <div className="projList">
              <h2>{project.name.toUpperCase()}</h2>
              <button 
              className="modal-delete"
              onClick={(e) => delProj(project.id)}
              >DELETE</button>
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
