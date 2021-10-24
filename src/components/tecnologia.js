import React from 'react';
import '../styles/scss/main.css';
import TecnologiaImage from '../assets/Tecnologia_image_desk.png';

export class Tecnologia extends React.Component {

  render() {
    return (
      <div>
        {/* <div class="separator_tecnologia"></div> */}
        <section className="tecnologia">
            <div className="tecnologia_container">
            <div className="tecnologia_image">
                  <img src={TecnologiaImage} alt="Tecnologia image" />
                </div>
                <div className="tecnologia_text">
                    <h3>Tecnologia e Segurança</h3>
                    <p>
                      A DFESA é equipada com um moderno sistema de comando e de controle digital 
                      que permite automatizar muitos processos, proporcionando segurança ao 
                      prosseguimento da operação. Assim, atividades que antes eram perigosas não 
                      necessitam mais da presença humana, eliminando o risco de acidentes.
                    </p>
                </div>
                
            </div>
            {/* <div className="Vector_about">
              <img src={VectorAbout} alt="Vector About" />
            </div> */}
        </section>
      </div>
    );
  }
}

export default Tecnologia;