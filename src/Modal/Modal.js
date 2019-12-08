import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.scss';

const Modal = (props) => {
  return (
    <div className="modal">
      <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
      <button onClick={this.closeModal}>close</button>
      <div>I am a modal</div>
      <form>
        <input />
        <button>tab navigation</button>
        <button>stays</button>
        <button>inside</button>
        <button>the modal</button>
      </form>
    </div>
  )
}

export default Modal;
