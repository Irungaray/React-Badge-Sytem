import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Navbar.css';
import logo from '../images/logo.svg';
class Navbar extends React.Component {
  render() {
    return (
      <div className="Navbar">
        <Link to="/">
            <img src={logo} alt="Logo" />
            <span className="font-weight-ligth">Capos </span>
            <span className="font-weight-bold">Conf</span>
        </Link>
      </div>
    )
  }
};

export default Navbar;