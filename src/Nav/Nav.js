import React from 'react';
import './Nav.scss';
import blackPlus from '../assets/images/plus_black.svg';
import refresh from '../assets/images/refresh.svg';

export const Nav = (props) => {

  const colorChange = (e) => {
    e.preventDefault();
    props.refreshColors();
  }

  return (
    <header className="Nav">
      <div>
        <h1>PALE
          <span>
            <img src={blackPlus} alt="plus sign"/>
          </span>
          <span>
            <img src={blackPlus} alt="plus sign" />
          </span>
          E</h1>
        <h1>PICKER</h1>
      </div>
      <section className="nav-controls">
        <img className="refresh" 
        src={refresh} 
        alt="refresh icon" 
        onClick={event => colorChange(event)}
        />
        <img 
        className="add-project" 
        src={blackPlus} 
        alt="black plus symbol"
        onClick={props.openModal}
        />
      </section>
    </header>
  )
}

export default Nav;
