import React from 'react';
import '../styles/scss/main.css';
import VectorTrajetoria from '../assets/Vector_sobre_trajetoria_desk.webp';
import BGSobreBottom from '../assets/BG_Sobre_bottom_desk.webp';
import CarouselSobre from './swiperSobre';

export class SobreTrajetoria extends React.Component {

  render() {
    return (
      <div>
        <section className="sobre_trajetoria">
            <div className="sobre_layer"></div>
            <div className="sobre_bg">
                <img src={BGSobreBottom} alt="BG Sobre"/>
            </div>

            <div className="vector_trajetoria">
                <img src={VectorTrajetoria} alt="Vector trajetória" />
            </div>
            <div className="sobre_trajetoria_container">
                <div className="sobre_trajetoria_title">
                    <h4>De onde viemos?</h4>
                    <h3>Trajetória</h3>
                    <p>
                        Hoje somos referência no mercado, mas nossa história não começa daí. 
                        Quando a DFESA - Dona Francisca Energética S.A iniciou sua operação, 
                        em 2001, sentíamos na pele os efeitos do apagão energético, um período 
                        crítico que pudemos ultrapassar junto de todo o país. Mas, na verdade, 
                        a história começa ainda antes.
                    </p>
                </div>
            </div>
            <CarouselSobre />

            <div className="trajetoria_numeros">
              <div className="trajetoria_numeros_title">
                <h3>A Construção em números</h3>
              </div>
              <div className="trajetoria_numeros_items">
                <div className="trajetoria_numeros_card">
                  <h4>1.065.000<span>m³</span></h4>
                  <p>Escavação comum</p>
                </div>
                <div className="trajetoria_numeros_card">
                  <h4>1.107.000<span>m³</span></h4>
                  <p>Escavação em rocha</p>
                </div>
                <div className="trajetoria_numeros_card">
                  <h4>165.000<span>m³</span></h4>
                  <p>Concreto convencional</p>
                </div>
                <div className="trajetoria_numeros_card">
                  <h4>106.000<span>m³</span></h4>
                  <p>Fornecimento de cimento</p>
                </div>
                <div className="trajetoria_numeros_card">
                  <h4>4.630<span>m³</span></h4>
                  <p>Fornecimento de aço</p>
                </div>
              </div>
            </div>
        </section>

      </div>
    );
  }
}

export default SobreTrajetoria;