import React from 'react';
import '../styles/scss/main.css';

export class Duvidas extends React.Component {

  render() {
    return (
      <div>
        <section className="duvidas">
        <div className="duvidas_layer"></div>
            <div className="duvidas_container">
                
                <div className="duvidas_text">
                    <h3>Tire dúvidas e receba o suporte da nossa equipe</h3>
                    <div className="duvidas_link">
                        <a>Fale conosco</a>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Duvidas;