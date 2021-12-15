import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import VectorSobreImage from '../assets/Vector_sobre_fazemos_desk.webp';
import SobreFazemosImage from '../assets/Sobre_fazemos_image_desk.webp';

export class SobreFazemos extends React.Component {
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
            <section className="sobre_fazemos">
                <div className="sobre_layer"></div>
                <div className="vector_sobre">
                    <img src={VectorSobreImage} alt="Vector Sobre" />
                </div>
                <div className="sobre_fazemos_container">
                    <div className="sobre_fazemos_title">
                        <h3>{sobre.sobreFazemosTitulo}</h3>
                        <p>{sobre.sobreFazemosTexto}</p>
                    </div>
                </div>
                <div className="sobre_image">
                    <img src={SobreFazemosImage} alt="Sobre imagem" />
                </div>
            </section>
        ))}
      </div>
    );
  }
}

export default SobreFazemos;