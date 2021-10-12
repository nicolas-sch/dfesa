import React from 'react';
import { render } from 'react-dom';
import '../styles/scss/main.css';
import Logo from '../assets/Logo.png';
import LogoMenu from '../assets/Logo_menu_desk.png';


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
  render() {
    return (
        <div className="navbar">
            <div className="navbar_container">
                <div className="navbar_image">
                    <a href="/"><img src={Logo} alt="Logo" /></a>
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
                    <div className={ this.state.abreMenu ? "menu menu--open" : "menu" }>
                    <div className="menu_container">
                        <div className="menu_links">
                                
                                <div className="menu_links_box">
                                <div className="menu_logo">
                                    <img src={LogoMenu} alt="Logo Menu" />
                                </div>
                                    <a href="/sustentabilidadeedesenvolvimento">Sustentabilidade & desenvolvimento</a>
                                    <a href="">Sobre</a>
                                    <a href="">FAQ e Contato</a>
                                </div>
                                <div className="menu_separator"></div>
                                <div className="menu_links_box2">
                                    <a href="">Código de Ética e Conduta</a>
                                    <a href="">Políticas e Privacidade</a>
                                </div>
                            </div>
                            <div className="menu_socials">
                                <p>Acesse nossa rede social</p>
                                <div className="menu_icons">
                                    <i class="fab fa-linkedin-in"></i>
                                    <span>Linkedin</span>
                                </div>
                            </div>
                            <div className="menu_rights">
                            <p>© 2021 - DFESA. Todos os direitos reservados.</p> 
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