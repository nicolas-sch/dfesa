import React from 'react';
import '../styles/scss/main.css';
import BGBarragem from '../assets/BG_Barragem_desk.webp';

export class Barragem extends React.Component {

  render() {
    return (
      <div>
        <section className="barragem">
            <div className="barragem_layer"></div>
            <div className="barragem_bg">
                <img src={BGBarragem} alt="BG Barragem"/>
            </div>
            <div className="barragem_container">
                <div className="barragem_title">
                    <h3>Barragem</h3>
                    <p>Gravidade em Concreto Compactado a Rolo (CCR)</p>
                </div>
                
                <div className="barragem_box">
                    <div className="barragem_numbers">
                        <h5>610<span>m</span></h5>
                        <p>Comprimento</p>
                    </div>
                    <div className="barragem_numbers">
                        <h5>51<span>m</span></h5>
                        <p>Altura</p>
                    </div>
                    <div className="barragem_numbers">
                        <h5>484.000<span>m³</span></h5>
                        <p>Volume de CCR</p>
                    </div>
                </div>
            </div>
            
        </section>
      </div>
    );
  }
}

export default Barragem;