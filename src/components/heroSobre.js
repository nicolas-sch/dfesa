import React from 'react';
import '../styles/scss/main.css';

export class HeroSobre extends React.Component {

  render() {
    return (
      <div>
        <section className="hero_sobre">
            <div className="hero_sobre_container">
                <div className="hero_sobre_text">
                    <h2>O que fazemos?</h2>
                    <p>Produzimos energia com excelência e responsabilidade para as operações dos nossos quatro acionistas.</p>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default HeroSobre;