import React from 'react';
import '../styles/scss/main.css';
import News1 from '../assets/News1_desk.webp';
import News2 from '../assets/News2_desk.webp';
import News3 from '../assets/News3_desk.webp';
import News4 from '../assets/News4_desk.webp';
import Slide from 'react-reveal/Slide';
import Zoom from 'react-reveal/Zoom'; 
import VectorNews from '../assets/Vector_news.webp';

export class News extends React.Component {

  render() {
    return (
      <div>
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
                            <img src={News1} alt="Notícia 1" />
                            </Zoom>
                        </div>
                        <div className="news_card_text">
                            <h5>Notícia 1</h5>
                            <p>Hac penatibus donec at id neque at. Convallis...</p>
                        </div>
                        <div className="news_card_link">
                            <a>Saiba mais</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="news_card_image">
                            <Zoom>
                            <img src={News2} alt="Notícia 2" />
                            </Zoom>
                        </div>
                        <div className="news_card_text">
                            <h5>Notícia 2</h5>
                            <p>Hac penatibus donec at id neque at. Convallis...</p>
                        </div>
                        <div className="news_card_link">
                            <a>Saiba mais</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="news_card_image">
                            <Zoom>
                            <img src={News3} alt="Notícia 3" />
                            </Zoom>
                        </div>
                        <div className="news_card_text">
                            <h5>Notícia 3</h5>
                            <p>Hac penatibus donec at id neque at. Convallis...</p>
                        </div>
                        <div className="news_card_link">
                            <a>Saiba mais</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="news_card_image">
                            <Zoom>
                            <img src={News4} alt="Notícia 4" />
                            </Zoom>
                        </div>
                        <div className="news_card_text">
                            <h5>Notícia 4</h5>
                            <p>Hac penatibus donec at id neque at. Convallis...</p>
                        </div>
                        <div className="news_card_link">
                            <a>Saiba mais</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default News;