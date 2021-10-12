import React from 'react';
import '../styles/scss/main.css';

export class AboutSustentabilidade extends React.Component {

  render() {
    return (
      <div>
        <section className="about_sustentabilidade">
            <div className="about_sustentabilidade_container">
                <div className="about_sustentabilidade_title">
                    <h3>
                        Desenvolvimento sustentável
                    </h3>
                </div>
                <div className="about_sustentabilidade_text">
                  <p>
                    Já são duas décadas gerando energia com prontidão e responsabilidade. 
                    Desde a fase anterior ao início da construção da UHE, demonstramos nossa 
                    atenção para a causa ambiental. Nesse período, implementamos 28 programas 
                    ambientais para investigar os meios físico, biótico e social e, assim, 
                    minimizar os impactos negativos à natureza.
                  </p>
                  <p>
                    Hoje, continuamos a prestar atenção a essas questões, a partir da realização 
                    de monitoramentos periódicos da qualidade da água. Também catalogamos as espécies 
                    de peixes presentes nas águas da região e promovemos educação ambiental para a 
                    população circunvizinha. Nosso Sistema de Gestão Ambiental interno é o que dá base 
                    para as auditorias que são realizadas na usina de maneira frequente, atuando desde a 
                    coleta seletiva do lixo à destinação dos óleos utilizados nos transformadores.
                  </p>
                </div>
            </div>
        </section>
        
      </div>
    );
  }
}

export default AboutSustentabilidade;