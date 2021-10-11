import React from 'react';
import '../styles/scss/main.css';

export class Reservatorio extends React.Component {

  render() {
    return (
      <div>
        <section className="reservatorio">
            <div className="reservatorio_container">
                <div className="reservatorio_title">
                    <h3>Reservatório</h3>
                </div>
                
                <div className="reservatorio_box">
                    <div className="reservatorio_numbers">
                        <h5>18,7<span>km²</span></h5>
                        <p>Comprimento</p>
                    </div>
                    <div className="reservatorio_numbers">
                        <h5>104,6<span>m</span></h5>
                        <p>Nível Máximo Maximorum</p>
                    </div>
                    <div className="reservatorio_numbers">
                        <h5>94,5<span>m</span></h5>
                        <p>Nível Máximo Normal</p>
                    </div>
                    <div className="reservatorio_numbers">
                        <h5>62,8<span>m³</span></h5>
                        <p>Volume</p>
                    </div>
                    <div className="reservatorio_numbers">
                        <h5>50<span>km</span></h5>
                        <p>Perímetro <br></br>do lago</p>
                    </div>
                </div>
            </div>
            
        </section>
      </div>
    );
  }
}

export default Reservatorio;