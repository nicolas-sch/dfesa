import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';

export class HeroSustentabilidade extends React.Component {
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
          <section className="hero_sustentabilidade">
              <div className="hero_sustentabilidade_container">
                  <div className="hero_sustentabilidade_text">
                      <h2>{sustentabilidade.sustentabilidadeHeroTitulo}</h2>
                  </div>
              </div>
          </section>
        ))}
        
      </div>
    );
  }
}

export default HeroSustentabilidade;