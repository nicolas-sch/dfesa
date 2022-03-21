import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import AboutParqueImage from '../assets/About_parque_image_desk.webp';
import VectorParque from '../assets/Vector_desenvolvimento_black_desk.webp';

export class AboutParque extends React.Component {
  state = {
    sustentabilidades: [],
    error: null,
  };
  
  
  componentDidMount = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/sustentabilidade-e-desenvolvimentos`);
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
          <section className="about_parque">
              <div className="about_parque_container">
                  <div className="about_parque_image">
                      <img src={`${process.env.REACT_APP_BASE_URL}${sustentabilidade.parqueImagem.url}`} alt="About Parque Image"/>
                  </div>
                  <div className="about_parque_text">
                      <h3>{sustentabilidade.parqueTitulo}</h3>
                      <p>{sustentabilidade.parqueTexto}</p>
                  </div>
              </div>
              <div className="about_parque_vector">
                <img src={VectorParque} alt="Vector parque" />
              </div>
          </section>
        ))}
      </div>
    );
  }
}

export default AboutParque;