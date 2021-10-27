import React from 'react';
import '../styles/scss/main.css';
import LogoFooter from '../assets/Logo_Footer.webp';
import Climatempo from '../assets/climatempo.png';
import CCEE from '../assets/CCEE.png';
import ANEEL from '../assets/ANEEL.png';

export class Footer extends React.Component {

  render() {
    return (
      <div>
        <section className="footer">
            <div className="footer_container">
                <div className="footer_links">
                    <div className="footer_logo">
                        <img src={LogoFooter} alt="Logo Footer" />
                    </div>
                    <div className="footer_links_box">
                        <a href="/sustentabilidadeedesenvolvimento">Sustentabilidade & desenvolvimento</a>
                        <a href="/sobre">Sobre</a>
                        <a href="/faq">FAQ e Contato</a>
                    </div>
                    <div className="footer_separator"></div>
                    <div className="footer_links_box2">
                        <a href="/faq/#codigo">Ética e Compliance</a>
                        <a href="/politicas">Políticas e Privacidade</a>
                    </div>
                </div>
                <div className="footer_socials">
                    <p>Acesse nossa rede social</p>
                    <div className="social_icons">
                        <i class="fab fa-linkedin-in"></i>
                        <span>Linkedin</span>
                    </div>
                    <div className="utils_icons">
                      <a href="https://www.climatempo.com.br/" target="_blank">
                        <img src={Climatempo} alt="Climatempo" />
                      </a>
                      <a href="https://www.ccee.org.br/portal/faces/pages_publico/inicio" target="_blank">
                        <img src={CCEE} alt="CCEE" />
                      </a>
                      <a href="https://www.aneel.gov.br/" target="_blank">
                        <img src={ANEEL} alt="ANEEL" />
                      </a>
                      
                    </div>
                </div>
                <div className="footer_rights">
                   <p>© 2021 - DFESA. Todos os direitos reservados.</p> 
                </div>
            </div>
            <hr></hr>
        </section>
      </div>
    );
  }
}

export default Footer;