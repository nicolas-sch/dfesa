import React from 'react';
import '../styles/scss/main.css';
import EstruturaImage from '../assets/BG_sobre_estrutura_desk.webp';
import EstruturaTabela from '../assets/Estrutura_tabela_desk.webp';

export class SobreEstrutura extends React.Component {

  render() {
    return (
      <div>
        <section className="sobre_estrutura">
        <div className="estrutura_layer"></div>
            <div className="vector_estrutura">
                <img src={EstruturaImage} alt="Estrutura Image" />
            </div>
            <div className="sobre_estrutura_container">
                <div className="sobre_estrutura_title">
                    <h3>
                        Estrutura societária
                    </h3>
                    <img src={EstruturaTabela} alt="Tabela acionistas" />
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default SobreEstrutura;