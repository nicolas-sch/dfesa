import React from 'react';
import '../styles/scss/main.css';
import BGFaq from '../assets/BG_faq_canal_desk.png';

export class FaqCanal extends React.Component {

  render() {
    return (
      <div>
        <section className="faq_canal" id="codigo">
            <div className="faq_bg">
                <img src={BGFaq} alt="BG Faq" />
            </div>
            <div className="faq_canal_container">
                <div className="faq_canal_title">
                    <h3>
                        Canal da Ética
                    </h3>
                </div>
                <div className="faq_canal_text">
                    <p>
                        Registrar incidente ou consultar andamento
                    </p>
                </div>
                <div className="faq_canal_button">
                    <a href="">clique aqui</a>
                </div>
                
                <div className="faq_canal_title">
                    <h3>
                        Canal da Ética via Telefone
                    </h3>
                </div>
                <div className="faq_canal_text">
                    <p>
                        Ramal interno 1901
                        <br></br>
                        Brasil 51 3323.1901
                        <br></br>
                        EUA 1-800-732-7116
                    </p>
                </div>
                <div className="faq_canal_title">
                    <h3>
                        Canal da Ética por E-mail
                    </h3>
                </div>
                <div className="faq_canal_text">
                    <p>
                        canal.etica@dfesa.com.br
                    </p>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default FaqCanal;