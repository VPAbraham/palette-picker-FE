import React, { Component } from 'react';
import Modal from 'react-modal';
import './App.scss';
import Nav from '../Nav/Nav';
import Palette from '../Palette/Palette';
import blackPlus from '../assets/images/plus_black.svg';
// Modal.setAppElement('#yourAppElement')

class App extends Component {
  constructor() {
    super()
    this.state = {
      color1: 'blue',
      color2: 'green',
      color3: 'yellow',
      color4: 'red',
      color5: 'purple',
      modalIsOpen: false
    }
    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    // this.subtitle.style.color = '#f00';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    return(
      <div className="App">
        <Nav
          openModal={this.openModal}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="Modal"
          contentLabel="Example Modal"
        >
          <img src={blackPlus} onClick={this.closeModal} alt="black plus symbol" className="modalplus"/>
          <section className="menu">
            <div className="menu-items">
              <h1>SAVE PALETTE</h1>
            </div>
            <div className="menu-items">
              <h1>CREATE NEW PROJECT</h1>
            </div>
            <div className="menu-items">
              <h1>VIEW ALL PROJECTS</h1>
            </div>
          </section>
        </Modal>
        <main>
          <Palette
            color1={this.state.color1}
            color2={this.state.color2}
            color3={this.state.color3}
            color4={this.state.color4}
            color5={this.state.color5}
          />
        </main>
      </div>
    );
  }
}

export default App;
