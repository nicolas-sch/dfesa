import React from 'react';
import '../styles/scss/main.css';
import News1 from '../assets/News1_desk.png';
import News2 from '../assets/News2_desk.png';
import News3 from '../assets/News3_desk.png';
import News4 from '../assets/News4_desk.png';

export class News extends React.Component {

  render() {
    return (
      <div>
        <section className="news">
            <div className="news_container">
                <div className="news_text">
                    <h4>Notícias</h4>
                </div>
                <div className="news_cards">
                    <div className="card">
                        <div className="news_card_image">
                            <img src={News1} alt="Notícia 1" />
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
                            <img src={News2} alt="Notícia 2" />
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
                            <img src={News3} alt="Notícia 3" />
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
                            <img src={News4} alt="Notícia 4" />
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