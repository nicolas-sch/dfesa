import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';
import BGFaq from '../assets/BG_faq_canal_desk.webp';

export class FaqCanal extends React.Component {
    state = {
        faqs: [],
        error: null,
    };
    
    
    componentDidMount = async () => {
        try {
            const response = await axios.get('http://localhost:1337/faqs');
            this.setState({ faqs: response.data });
        } catch (error) {
            this.setState({ error });
        }
    };

  render() {
    const { error, faq} = this.state;

    // Print errors if any
    if (error) {
      return <div>An error occured: {error.message}</div>;
    }
    return (
      <div>
          {this.state.faqs.map(faq => (
            <section className="faq_canal" id="codigo">
                <div className="faq_bg">
                    <img src={`http://localhost:1337${faq.faqCanalImagem.url}`} alt="BG Faq" />
                </div>
                <div className="faq_canal_container">
                    <div className="faq_canal_title">
                        <h3>{faq.faqCanalTitulo1}</h3>
                    </div>
                    <div className="faq_canal_text">
                        <p>{faq.faqCanalTexto1}</p>
                    </div>
                    <div className="faq_canal_button">
                        <a href="https://intranet.gerdau.com.br/cs-jur/canaldaetica/portal/incidente?codIdioma=BRA&_ga=2.105152771.1626837410.1635448885-2141579903.1621275588" target="_blank">clique aqui</a>
                    </div>
                    
                    <div className="faq_canal_title">
                        <h3>{faq.faqCanalTitulo2}</h3>
                    </div>
                    <div className="faq_canal_text">
                        <p>{faq.faqCanalTel1}</p>
                        <p>{faq.faqCanalTel2}</p>
                        <p>{faq.faqCanalTel3}</p>
                    </div>
                    <div className="faq_canal_title">
                        <h3>{faq.faqCanalTitulo3}</h3>
                    </div>
                    <div className="faq_canal_text">
                        <p>{faq.faqCanalEmail}</p>
                    </div>
                </div>
            </section>
        ))}
        
      </div>
    );
  }
}

export default FaqCanal;