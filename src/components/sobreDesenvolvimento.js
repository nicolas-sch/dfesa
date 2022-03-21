import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import VectorDesenvolvimento from '../assets/Vector_desenvolvimento_desk.webp';

export class SobreDesenvolvimento extends React.Component {
  state = {
    sobres: [],
    error: null,
  };
  
  
  componentDidMount = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/sobres`); 
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
            <section className="sobre_desenvolvimento">
              <div className="vector_desenvolvimento">
                  <img src={VectorDesenvolvimento} alt="Vector desenvolvimento" />
              </div>
              <div className="sobre_desenvolvimento_container">
                  <div className="sobre_desenvolvimento_title">
                      <h3>{sobre.sobreDesenvolvimentoTitulo}</h3>
                  </div>
                  <div className="sobre_desenvolvimento_text">
                      <p>{sobre.sobreDesenvolvimentoTexto1}</p>
                      <p>{sobre.sobreDesenvolvimentoTexto2}</p>
                      <p>{sobre.sobreDesenvolvimentoTexto3}</p>
                  </div>
              </div>
            </section>
          
        ))}
        
      </div>
    );
  }
}

export default SobreDesenvolvimento;