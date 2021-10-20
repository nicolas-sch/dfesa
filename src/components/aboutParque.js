import React from 'react';
import '../styles/scss/main.css';
import AboutParqueImage from '../assets/About_parque_image_desk.png';
import VectorParque from '../assets/Vector_desenvolvimento_black_desk.png';

export class AboutParque extends React.Component {

  render() {
    return (
      <div>
        <section className="about_parque">
            <div className="about_parque_container">
                <div className="about_parque_image">
                    <img src={AboutParqueImage} alt="About Parque Image"/>
                </div>
                <div className="about_parque_text">
                    <h3>
                        Parque Quarta Colônia
                    </h3>
                    <p>
                    A criação do Parque Quarta Colônia, no ano de 2010, deu ainda mais força ao 
                    compromisso da Dona Francisca Energética S.A com o meio ambiente. 
                    Essa iniciativa foi fruto do investimento do nosso Consórcio com a Companhia 
                    Estadual de Energia Elétrica do Rio Grande do Sul (CEEE). 
                    Nossa reserva ambiental de mais de 1.800 hectares é peça chave na preservação 
                    da fauna e da flora nativas da área, por ser lar para aves, anfíbios e roedores 
                    ameaçados de extinção.
                    </p>
                </div>
            </div>
            <div className="about_parque_vector">
              <img src={VectorParque} alt="Vector parque" />
            </div>
        </section>
        
      </div>
    );
  }
}

export default AboutParque;