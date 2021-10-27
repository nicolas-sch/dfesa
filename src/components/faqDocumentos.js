import React from 'react';
import '../styles/scss/main.css';
import VectorDocumentos from '../assets/Vector_faq_documentos_desk.webp';
import Carousel from './swiperDocs';

export class FaqDocumentos extends React.Component {

  render() {
    return (
      <div>
        <section className="faq_documentos">
            <div className="faq_documentos_bg">
                <img src={VectorDocumentos} alt="Vector documentos"/>
            </div>
            <div className="faq_documentos_container">
              <h3>
                  Documentos para download
              </h3>
              <Carousel />
            </div>
        </section>
      </div>
    );
  }
}

export default FaqDocumentos;