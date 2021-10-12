import React from 'react';
import '../styles/scss/main.css';
import VectorSobreImage from '../assets/Vector_sobre_fazemos_desk.png';
import SobreFazemosImage from '../assets/Sobre_fazemos_image_desk.png';

export class SobreFazemos extends React.Component {

  render() {
    return (
      <div>
        <section className="sobre_fazemos">
            <div className="sobre_layer"></div>
            <div className="vector_sobre">
                <img src={VectorSobreImage} alt="Vector Sobre" />
            </div>
            <div className="sobre_fazemos_container">
                <div className="sobre_fazemos_title">
                    <h3>
                        Como fazemos?
                    </h3>
                    <p>
                        A eficiência é uma de nossas principais marcas, além do cuidado em 
                        aplicar as inovações tecnológicas que fazem da nossa energia limpa. 
                        Também aplicamos a automatização na maioria dos processos, o que 
                        proporciona segurança nas atividades dos nossos funcionários.
                    </p>
                </div>
            </div>
            <div className="sobre_image">
                <img src={SobreFazemosImage} alt="Sobre imagem" />
            </div>
        </section>
        
      </div>
    );
  }
}

export default SobreFazemos;