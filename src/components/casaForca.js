import React from 'react';
import '../styles/scss/main.css';

export class Casa extends React.Component {

  render() {
    return (
      <div>
        <section className="casa">
            <div className="casa_container">
                <div className="casa_title">
                    <h3>Casa de força</h3>
                    <p>Tipo: Abrigada</p>
                </div>
                
                <div className="casa_box_master">
                    <div className="casa_box">
                        <div className="casa_box_title">
                            <h4>Turbina 2 x Francis eixo vertical com</h4>
                        </div>
                        <div className="casa_wrapper">
                            <div className="casa_numbers">
                                <h5>64,2<span>MW</span></h5>
                                <p>Potência</p>
                            </div>
                            <div className="casa_numbers">
                                <h5>191,3<span>m³/s</span></h5>
                                <p>Vazão</p>
                            </div>
                        </div>
                    </div>
                    <div className="casa_box">
                        <div className="casa_box_title">
                            <h4>Gerador GE com</h4>
                        </div>
                        <div className="casa_wrapper">
                            <div className="casa_numbers">
                                <h5>2 x 62,5<span>MW</span></h5>
                                <p>Potência</p>
                            </div>
                            <div className="casa_numbers">
                                <h5>125<span>rpm</span></h5>
                                <p>Rotação</p>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>
      </div>
    );
  }
}

export default Casa;