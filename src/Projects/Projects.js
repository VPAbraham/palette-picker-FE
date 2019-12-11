import React from 'react';
import ColorSmall from '../ColorSmall/ColorSmall';
import './Projects.scss';
import { deletePalette, deleteProject } from '../apiCalls/apiCalls';
import trash from '../assets/images/trash.svg';



export const Projects = (props) => {
  const { removeProject, removePalette, projects, palettes, hover } = props;

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
        return <div className="palList">
          <div className={hover ? "hover" : "all-swatches"} onClick={() => props.selectPalette(pal.color1, pal.color2, pal.color3, pal.color4, pal.color5)}>
            <img src={trash} onClick={() => delPal(pal.id)} className="modal-delete-small" alt="trashcan" />
            <ColorSmall key="1" color={pal.color1} />
            <ColorSmall key="2" color={pal.color2} />
            <ColorSmall key="3" color={pal.color3} />
            <ColorSmall key="4" color={pal.color4} />
            <ColorSmall key="5" color={pal.color5} />
          </div>
          <h4>{pal.name.toUpperCase()}</h4>
        </div>
      })
      return <div>
        <div className="projList">
          <img src={trash} onClick={(e) => delProj(project.id)} className="modal-delete" alt="trashcan" />
          <h2>{project.name.toUpperCase()}</h2>
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
