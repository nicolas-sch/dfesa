import React from 'react';
import '../styles/scss/main.css';

export class Vertedouro extends React.Component {

  render() {
    return (
      <div>
        <section className="vertedouro">
            <div className="vertedouro_container">
                <div className="vertedouro_title">
                    <h3>Vertedouro</h3>
                    <p>Tipo de soleira: Livre</p>
                </div>
                
                <div className="vertedouro_box">
                    <div className="vertedouro_numbers">
                        <h5>104,6<span>m</span></h5>
                        <p>Nível Máximo Maximorum</p>
                    </div>
                    <div className="vertedouro_numbers">
                        <h5>94,5<span>m</span></h5>
                        <p>Nível Máximo Normal</p>
                    </div>
                    <div className="vertedouro_numbers">
                        <h5>10.600<span>m³/s</span></h5>
                        <p>Vazão Máxima</p>
                    </div>
                </div>
            </div>
            
        </section>
      </div>
    );
  }
}

export default Vertedouro;