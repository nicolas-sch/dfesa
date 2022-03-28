import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../styles/scss/main.css';
import NewsImage from '../assets/News1_desk.webp'

export class HeroNoticias extends React.Component {
  state = {
    noticias: [],
    error: null,
  };
  
  
  componentDidMount = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/noticias`);
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
        <div className="noticias-cards-container">
          {this.state.noticias.map(noticia => (
              <div className="noticias-cards">
                <div className="card">
                  <div className="noticias-card-image">
                  <img src={NewsImage} alt="Notícia 1" />
                  </div>
                  <div className="noticias-card-text">
                    <h5>{noticia.noticiasHeroTitulo}</h5>
                    <p>{noticia.noticiaTexto}</p>
                  </div>
                  <div className="noticias-card-link">
                    <Link to={`/noticiasDetails/${noticia.id}`}><button>Saiba mais</button></Link>
                      
                  </div>
                </div>
              </div>
          ))}
        </div>
    );
  }
}

export default HeroNoticias; 