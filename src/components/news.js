import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import News1 from '../assets/News1_desk.webp';
import News2 from '../assets/News2_desk.webp';
import News3 from '../assets/News3_desk.webp';
import News4 from '../assets/News4_desk.webp';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom'; 
import VectorNews from '../assets/Vector_news.webp';

export class News extends React.Component {
    state = {
        homes: [],
        error: null,
    };
        
    componentDidMount = async () => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/homes`);
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
        <section className="news">
            <div className="about_home_layer">
                <img src={VectorNews} alt="Vector News" />
            </div>
            <div className="news_container">
                <div className="news_text">
                <Slide left>
                    <h4>Notícias</h4>
                </Slide>
                </div>
                <div className="news_cards">
                    <div className="card">
                        <div className="news_card_image">
                            <Zoom>
                            <img src={`${process.env.REACT_APP_BASE_URL}${home.noticiasImagem1.url}`} alt="Notícia 1" />
                            </Zoom>
                        </div>
                        <div className="news_card_text">
                            <h5>{home.noticiasTitulo1}</h5>
                            {/* <p>Hac penatibus donec at id neque at. Convallis...</p> */}
                        </div>
                        <div className="news_card_link">
                            <a href="/noticias">Saiba mais</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="news_card_image">
                            <Zoom>
                            <img src={`${process.env.REACT_APP_BASE_URL}${home.noticiasImagem2.url}`} alt="Notícia 2" />
                            </Zoom>
                        </div>
                        <div className="news_card_text">
                            <h5>{home.noticiasTitulo2}</h5>
                            {/* <p>Hac penatibus donec at id neque at. Convallis...</p> */}
                        </div>
                        <div className="news_card_link">
                            <a href="/noticias">Saiba mais</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="news_card_image">
                            <Zoom>
                            <img src={`${process.env.REACT_APP_BASE_URL}${home.noticiasImagem4.url}`} alt="Notícia 3" />
                            </Zoom>
                        </div>
                        <div className="news_card_text">
                            <h5>{home.noticiasTitulo3}</h5>
                            {/* <p>Hac penatibus donec at id neque at. Convallis...</p> */}
                        </div>
                        <div className="news_card_link">
                            <a href="/noticias">Saiba mais</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="news_card_image">
                            <Zoom>
                            <img src={`${process.env.REACT_APP_BASE_URL}${home.noticiasImagem4.url}`} alt="Notícia 4" />
                            </Zoom>
                        </div>
                        <div className="news_card_text">
                            <h5>{home.noticiasTitulo4}</h5>
                            {/* <p>Hac penatibus donec at id neque at. Convallis...</p> */}
                        </div>
                        <div className="news_card_link">
                            <a href="/noticias">Saiba mais</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        ))} 
      </div>
    );
  }
}

export default News;