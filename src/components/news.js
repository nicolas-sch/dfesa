import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom'; 
import VectorNews from '../assets/Vector_news.webp';

export class HeroNoticias extends React.Component {
    state = {
      noticias: [],
      error: null,
    };
    
    
    componentDidMount = async () => {
      try {
        const response = await axios.get('http://localhost:1337/noticias');
        //const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/noticias`);
        this.setState({ noticias: response.data.slice(0, 4) });
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
          <section className='noticias-page'>
              <div className="about_home_layer">
                <img src={VectorNews} alt="Vector News" />
            </div>
          <div className="noticias-cards-container">
            {this.state.noticias.map(noticia => (
                <div className="noticias-cards">
                  <div className="card">
                    <div className="noticias-card-image">
                        <Zoom>
                            <img src={`http://localhost:1337${noticia.imagemNoticia.url}`} alt="Notícia 1" />
                        </Zoom>
                    </div>
                    <div className="noticias-card-text">
                      <h5>{noticia.noticiasHeroTitulo}</h5>
                      <p>{noticia.noticiaTexto}</p>
                    </div>
                    <div className="noticias-card-link">
                      <Link to={`/noticias`}><button>Saiba mais</button></Link>
                    </div>
                  </div>
                </div>
            ))}
          </div>
          </section>
      );
    }
  }
  
  export default HeroNoticias; 