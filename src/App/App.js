import React, { Component } from 'react';
import Modal from 'react-modal';
import './App.scss';
import Nav from '../Nav/Nav';
import Palette from '../Palette/Palette';
import PaletteForm from '../PaletteForm/PaletteForm';
import ProjectForm from '../ProjectForm/ProjectForm';
import { getColors } from '../apiCalls/apiCallsColors';
import whiteClose from '../assets/images/close_white.svg';
import { getProjects, getPalettes } from '../apiCalls/apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      color1: '#baddc3',
      color2: '#ff6767',
      color3: '#ffe596',
      color4: '#b3e6ff',
      color5: '#41406d',
      modalIsOpen: false,
      palettes: [],
      projects: [],
      creatingProj: false
    }
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  async componentDidMount() {
    const newPalette = await getColors();
    this.setState({
      randomizedPalette: newPalette
    });
    const allProjects = await getProjects();
    this.setState({
      projects: allProjects
    });
    const allPalettes = await getPalettes();
    this.setState({
      palettes: allPalettes
    });
  }

  refreshColors = async () => {
    const newPalette = await getColors();
    this.setState({
      color1: newPalette[0],
      color2: newPalette[1],
      color3: newPalette[2],
      color4: newPalette[3],
      color5: newPalette[4]
    });
  };

  refreshPalettes = (newPalette) => {
    const allPalettes = this.state.palettes;
    if(newPalette.name) {
      allPalettes.push(newPalette);
      this.setState({palettes: allPalettes})
    }
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  };

  closeModal() {
    this.setState({ modalIsOpen: false });
  };

  selectPalette = (color1, color2, color3, color4, color5) => {
    this.setState({
      color1: color1,
      color2: color2,
      color3: color3,
      color4: color4,
      color5: color5
    });
  };

  render() {
    return(
      <div className="App" id="root">
        <Nav
          openModal={this.openModal}
          refreshColors={this.refreshColors}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="Modal"
          contentLabel="Example Modal"
          key="Modal"
        >
          <img src={whiteClose} onClick={this.closeModal} alt="white x symbol" className="modalClose"/>
          <section className="menu">

            <PaletteForm
              color1={this.state.color1}
              color2={this.state.color2}
              color3={this.state.color3}
              color4={this.state.color4}
              color5={this.state.color5}
              projects={this.state.projects}
              refreshPalettes={this.refreshPalettes}
              key="PaletteForm"
            />
            <ProjectForm
              palettes={this.state.palettes}
              projects={this.state.projects}
              selectPalette={this.selectPalette}
              key="ProjectForm"
            />
          </section>
        </Modal>
        <main>
          <Palette
            color1={this.state.color1}
            color2={this.state.color2}
            color3={this.state.color3}
            color4={this.state.color4}
            color5={this.state.color5}
            key="palette"
          />
        </main>
      </div>
    );
  }
}

export default App;
