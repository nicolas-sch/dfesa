import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, BrowserRouter, render, Link} from 'react-router-dom';
import '../styles/scss/main.css';
import Logo from '../assets/Logo.webp';
import LogoMenu from '../assets/Logo_menu_desk.webp';
import LogoMenu2 from '../assets/Logo_menu_desk2.webp';
import { NavLink } from 'react-router-dom';
import FaqCanal from './faqCanal';

class Navbar extends React.Component {
  
  constructor(props) {
    super(props);
    this.state= {
      abreMenu: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      abreMenu: !this.state.abreMenu
    })
  }
  
  state = {
    isTop: true,
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY >= 80;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }
  
  render() {
    return (
        <div className={this.state.isTop ? 'navbar active' : 'navbar'}>
            <div className="navbar_container">
                <div className="navbar_image">
                    <a href="/"><img src={Logo} alt="Logo" /></a>
                </div>
                <div className="navbar_image_active">
                    <a href="/"><img src={LogoMenu2} alt="Logo" /></a>
                </div>
                <div className="navbar_links">
                    <p>menu</p>
                    <button
                    className={ this.state.abreMenu ? "hamburguer hamburguer--open" : "hamburguer" }
                    onClick={this.handleClick}
                    >
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                    </button>
                    <div className={ this.state.abreMenu ? "menu menu--open" : "menu " }>
                    <div className="menu_container">
                        <div className="menu_links">
                                <div className="menu_links_box">
                                <div className="menu_logo">
                                    <a href="/"><img src={LogoMenu} alt="Logo Menu" /></a>
                                </div>
                                    <a href="/sobre">Sobre</a>
                                    <a href="/sustentabilidadeedesenvolvimento">Sustentabilidade & desenvolvimento</a>
                                    <a href="/faq/#codigo">??tica e Compliance</a>
                                </div>
                                <div className="menu_separator"></div>
                                <div className="menu_links_box2">
                                    <a href="/faq/#form">FAQ e Contato</a>
                                    <a href="/politicas">Pol??tica de Privacidade</a>
                                </div>
                            </div>
                            <div className="menu_socials">
                                <p>Acesse nossa rede social</p>
                                <div className="menu_icons">
                                    <i class="fab fa-linkedin-in"></i>
                                    <span>Linkedin</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
export default Navbar;