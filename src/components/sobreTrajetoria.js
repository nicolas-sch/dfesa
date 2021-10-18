import React from 'react';
import '../styles/scss/main.css';
import VectorTrajetoria from '../assets/Vector_sobre_trajetoria_desk.png';
import BGSobreBottom from '../assets/BG_Sobre_bottom_desk.png';


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
        </section>
      </div>
    );
  }
}

export default SobreTrajetoria;