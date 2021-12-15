import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';

export class AboutSustentabilidade extends React.Component {
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
          <section className="about_sustentabilidade">
              <div className="about_sustentabilidade_container">
                  <div className="about_sustentabilidade_title">
                      <h3>{sustentabilidade.sobreDesenvolvimentoTitulo}</h3>
                  </div>
                  <div className="about_sustentabilidade_text">
                    <p>{sustentabilidade.sobreDesenvolvimentoTexto1}</p>
                    <p>{sustentabilidade.sobreDesenvolvimentoTexto2}</p>
                  </div>
              </div>
          </section>
        ))}
      </div>
    );
  }
}

export default AboutSustentabilidade;