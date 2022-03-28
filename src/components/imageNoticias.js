import React from 'react';
import '../styles/scss/main.css';

export class ImageNoticias extends React.Component {
  render() {
    return (
      <div>
          <section className="image-hero-noticias">
              <div className="image-hero-noticias-container">
                  <div className="image-hero-noticias-text">
                      <h2>Notícias</h2>
                  </div>
              </div>
          </section>
      </div>
    );
  }
}

export default ImageNoticias;