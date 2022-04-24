import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';

export class Hero extends React.Component {
   
  state = {
    homes: [],
    error: null,
  };
  
  
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/homes');
      //const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/homes`);
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
          <section className="hero">
              <div className="hero_container">
                  <div className="hero_text">
                      <h1>{home.heroTitle}</h1>
                      <p>{home.heroText}</p>
                      <a href="/sustentabilidadeedesenvolvimento">Leia mais</a>
                  </div>
              </div>
          </section>
          ))}     
      </div>
    );
  }
}

export default Hero;