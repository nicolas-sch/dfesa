import React from 'react';
import '../styles/scss/main.css';

export class Hero extends React.Component {

  render() {
    return (
      <div>
        <section className="hero">
            <div className="hero_container">
                <div className="hero_text">
                    <h1>Sustentabilidade é o nosso negócio</h1>
                    <p>
                        Do início das obras da DFESA - Dona Francisca Energética S.A, em 1998, até hoje, muitas águas passaram pela UHE. 
                        Nossa trajetória, iniciada em 2001 com a inauguração da Usina, mescla a força de pessoas, de máquinas e da 
                        natureza para fornecer energia com inovação e sustentabilidade.
                    </p>
                    <a href="/">Leia mais</a>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default Hero;