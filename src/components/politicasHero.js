import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';

export class HeroPoliticas extends React.Component {
  state = {
    politicas: [],
    error: null,
  };
  
  
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/politicas-de-privacidades');
      this.setState({ politicas: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, politica} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <div>
        {this.state.politicas.map(politica => (
            <section className="hero_politicas">
                <div className="hero_politicas_container">
                    <div className="hero_politicas_text">
                        <h2>{politica.politicasHeroTitulo}</h2>
                    </div>
                </div>
            </section>
        ))}
        
      </div>
    );
  }
}

export default HeroPoliticas;