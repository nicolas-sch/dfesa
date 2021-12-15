import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import VectorTrajetoria from '../assets/Vector_sobre_trajetoria_desk.webp';
import BGSobreBottom from '../assets/BG_Sobre_bottom_desk.webp';
import CarouselSobre from './swiperSobre';

export class SobreTrajetoria extends React.Component {
  state = {
    sobres: [],
    error: null,
  };
  
  
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/sobres');
      this.setState({ sobres: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, sobre} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <div>
        {this.state.sobres.map(sobre => (
          <section className="sobre_trajetoria">
              <div className="sobre_layer"></div>
              <div className="sobre_bg">
                  <img src={BGSobreBottom} alt="BG Sobre"/>
              </div>

              <div className="vector_trajetoria">
                  <img src={VectorTrajetoria} alt="Vector trajetória" />
              </div>
              <div className="sobre_trajetoria_container">
                  <div className="sobre_trajetoria_title">
                      <h4>{sobre.sobreTrajetoriaTitulo1}</h4>
                      <p>{sobre.sobreTrajetoriaText}</p>
                  </div>
              </div>
              <CarouselSobre />

              <div className="trajetoria_numeros">
                <div className="trajetoria_numeros_title">
                  <h3>{sobre.sobreNumerosTitulo}</h3>
                </div>
                <div className="trajetoria_numeros_items">
                  <div className="trajetoria_numeros_card">
                    <h4>{sobre.sobreNumerosDado1}<span>m³</span></h4>
                    <p>{sobre.sobreNumerosText1}</p>
                  </div>
                  <div className="trajetoria_numeros_card">
                    <h4>{sobre.sobreNumerosDado2}<span>m³</span></h4>
                    <p>{sobre.sobreNumerosText2}</p>
                  </div>
                  <div className="trajetoria_numeros_card">
                    <h4>{sobre.sobreNumerosDado3}<span>m³</span></h4>
                    <p>{sobre.sobreNumerosText3}</p>
                  </div>
                  <div className="trajetoria_numeros_card">
                    <h4>{sobre.sobreNumerosDado4}<span>m³</span></h4>
                    <p>{sobre.sobreNumerosText4}</p>
                  </div>
                  <div className="trajetoria_numeros_card">
                    <h4>{sobre.sobreNumerosDado5}<span>m³</span></h4>
                    <p>{sobre.sobreNumerosText5}</p>
                  </div>
                </div>
              </div>
          </section>
        ))}
        

      </div>
    );
  }
}

export default SobreTrajetoria;