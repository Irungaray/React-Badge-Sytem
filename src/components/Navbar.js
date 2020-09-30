import React from 'react';

import './styles/Navbar.css'
import logo from '../images/logo.svg'
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <a href="/">
            <img src={logo} alt="Logo" />
            <span className="font-weight-ligth">Capos </span>
            <span className="font-weight-bold">Conf</span>
        </a>
      </div>
    )
  }
}

export default Navbar;