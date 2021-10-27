import React from 'react';
import '../styles/scss/main.css';
import AboutDesk from '../assets/About_image_desk.png';
import VectorAbout from '../assets/Vector_about_home.png';

export class About extends React.Component {

  render() {
    return (
      <div>
        <section className="about">
          <div className="about_home_layer">
            <img src={VectorAbout} alt="Vector About" />
          </div>
            <div className="about_container">
                <div className="about_text">
                    <p>
                      A Usina Hidrelétrica (UHE) DFESA se localiza às margens do Rio Jacuí, 
                      numa área entre os municípios de Agudo e Nova Palma, no Rio Grande do Sul. 
                      Em atividade desde 2001, a UHE, atualmente, produz energia para as operações 
                      dos seus acionistas e está na busca constante por inovações tecnológicas que 
                      proporcionem a excelência em sustentabilidade e segurança. 
                    </p>
                </div>
                <div className="about_image">
                  <img src={AboutDesk} alt="About image" />
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

export default About;