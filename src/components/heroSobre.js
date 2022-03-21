import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';

export class HeroSobre extends React.Component {
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
            <section className="hero_sobre">
                <div className="hero_sobre_container">
                    <div className="hero_sobre_text">
                        <h2>{sobre.sobreHeroTitulo}</h2>
                        <p>{sobre.sobreHeroText}</p>
                    </div>
                </div>
            </section>
        ))}
      </div>
    );
  }
}

export default HeroSobre;