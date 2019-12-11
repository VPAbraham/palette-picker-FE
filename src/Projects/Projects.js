import React from 'react';
import ColorSmall from '../ColorSmall/ColorSmall';
import './Projects.scss';
import { deletePalette } from '../apiCalls/apiCalls';

const Projects = (props) => {
  const projects = props.projects
  const palettes = props.palettes
  const hover = props.hover

  const displayProjects = () => {
    return projects.map((project) => {
      let specPal = palettes.filter((palette) => {
        return palette.projects_id === project.id
      })
      let palmap = specPal.map((pal) => {
        return <div className="palList">
          <div className={hover?"hover":"all-swatches"} onClick={() => props.selectPalette(pal.color1, pal.color2, pal.color3, pal.color4, pal.color5)}>
            <ColorSmall key="1" color={pal.color1} />
            <ColorSmall key="2" color={pal.color2} />
            <ColorSmall key="3" color={pal.color3} />
            <ColorSmall key="4" color={pal.color4} />
            <ColorSmall key="5" color={pal.color5} />
          </div>
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
