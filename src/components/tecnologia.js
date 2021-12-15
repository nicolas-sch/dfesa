import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import TecnologiaImage from '../assets/Tecnologia_image_desk.webp';

export class Tecnologia extends React.Component {
  state = {
    homes: [],
    error: null,
  };
  
  
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/homes');
      this.setState({ homes: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, home } = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <div>
        {this.state.homes.map(home => (
          <section className="tecnologia">
            <div className="tecnologia_container">
                <div className="tecnologia_image">
                  <img src={`http://localhost:1337${home.segurancaImagem.url}`} alt="Tecnologia image" />
                </div>
                <div className="tecnologia_text">
                    <h3>{home.segurancaTitulo}</h3>
                    <p>{home.segurancaTexto}</p>
                </div>
                
            </div>
          </section>
        ))} 
        
      </div>
    );
  }
}

export default Tecnologia;