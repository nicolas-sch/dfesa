import React from 'react';
import '../styles/scss/main.css';
import Logo from '../assets/Logo.png';

export class Navbar extends React.Component {

  render() {
    return (
      <div>
        <div className="navbar">
            <div className="navbar_container">
                <div className="navbar_logo">
                    <img src={Logo} alt="Logo"/>
                </div>
                <div className="navbar_menu">
                    <i class="fas fa-search"></i>
                    <p>menu</p>
                    <i class="fas fa-bars"></i>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Navbar;