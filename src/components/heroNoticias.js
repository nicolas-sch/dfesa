import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';

export class HeroNoticias extends React.Component {
  state = {
    noticias: [],
    error: null,
  };
  
  
  componentDidMount = async () => {
    try {
      const response = await axios.get('http://localhost:1337/noticias');
      this.setState({ noticias: response.data });
    } catch (error) {
      this.setState({ error });
    }
  };

  render() {
    const { error, noticia} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <div>
        {this.state.noticias.map(noticia => (
            <section className="hero_noticias">
                <div className="hero_noticias_container">
                    <div className="hero_noticias_text">
                        <h2>{noticia.noticiasHeroTitulo}</h2>
                    </div>
                </div>
            </section>
        ))}
        
      </div>
    );
  }
}

export default HeroNoticias;