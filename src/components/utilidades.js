import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import UtilidadesImage1 from '../assets/utilidades_image1_desk.webp';
import UtilidadesImage2 from '../assets/utilidades_image2_desk.webp';
import UtilidadesImage3 from '../assets/utilidades_image3_desk.webp';
import UtilidadesImage4 from '../assets/utilidades_image4_desk.webp';
import VectorUtilidades from '../assets/Vector_Utilidades_desk.webp';

export class Utilidades extends React.Component {
    state = {
        sustentabilidades: [],
        error: null,
      };
      
      
      componentDidMount = async () => {
        try {
          const response = await axios.get('http://localhost:1337/sustentabilidade-e-desenvolvimentos');
          this.setState({ sustentabilidades: response.data });
        } catch (error) {
          this.setState({ error });
        }
      };

  render() {
    const { error, sustentabilidade} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <div>
          {this.state.sustentabilidades.map(sustentabilidade => (
            <section className="utilidades">
                <div className="utilidades_layer">
                    <img src={VectorUtilidades} alt="Vector Utilidades" />
                </div>
                <div className="utilidades_container">
                    <div className="utilidades_title">
                        <h3>Quer saber como é construída e como funciona uma UHE?</h3>
                        <h4>{sustentabilidade.utilidadesTitulo}</h4>
                    </div>
                    <div className="utilidades_box">
                        <div className="utilidades_text">
                            <p>{sustentabilidade.utilidadesBloco1Texto1}</p>
                            <p>{sustentabilidade.utilidadesBloco1Texto2}</p>
                        </div>
                        <div className="utilidades_image">
                            <img src={`http://localhost:1337${sustentabilidade.utilidadesImagem1.url}`} alt="Utilidades imagem 1"/>
                        </div>
                    </div>
                    <div className="utilidades_box">
                        <div className="utilidades_image">
                            <img src={`http://localhost:1337${sustentabilidade.utilidadesImagem2.url}`} alt="Utilidades imagem 2"/>
                        </div>
                        <div className="utilidades_text">
                            <p>{sustentabilidade.utilidadesBloco2Texto1}</p>
                        </div>
                    </div>
                    <div className="utilidades_box">
                        <div className="utilidades_text">
                            <p>{sustentabilidade.utilidadesBloco3Texto1}</p>
                        </div>
                        <div className="utilidades_image">
                            <img src={`http://localhost:1337${sustentabilidade.utilidadesImagem3.url}`}alt="Utilidades imagem 3"/>
                        </div>
                    </div>
                    <div className="utilidades_box">
                        <div className="utilidades_image">
                            <img src={`http://localhost:1337${sustentabilidade.utilidadesImagem4.url}`} alt="Utilidades imagem 4"/>
                        </div>
                        <div className="utilidades_text">
                            <p>{sustentabilidade.utilidadesBloco4Texto1}</p>
                            <p>{sustentabilidade.utilidadesBloco4Texto2}</p>
                            <p>{sustentabilidade.utilidadesBloco4Texto3}</p>
                        </div>
                    </div>
                    <div className="utilidades_text_bottom">
                        <p>{sustentabilidade.utilidadesTextoRodape1}</p>
                        <p>{sustentabilidade.utilidadesTextoRodape2}</p>
                        <p>{sustentabilidade.utilidadesTextoRodape3}</p>
                    </div>
                </div>
            </section>
        ))}
      </div>
    );
  }
}

export default Utilidades;