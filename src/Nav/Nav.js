import React from 'react';
import './Nav.scss';
import blackPlus from '../assets/images/plus_black.svg';
import refresh from '../assets/images/refresh.svg';

const Nav = () => {
  return (
    <header className="Nav">
      <div>
        <h1>PALETTE</h1>
        <h1>PICKER</h1>
      </div>
      <section className="nav-controls">
        <img src={refresh} alt="refresh icon" />
        <img src={blackPlus} alt="black plus symbol"/>
      </section>
    </header>
  )
}

export default Nav;