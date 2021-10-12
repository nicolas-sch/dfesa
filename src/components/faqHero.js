import React from 'react';
import '../styles/scss/main.css';

export class FaqHero extends React.Component {

  render() {
    return (
      <div>
        <section className="hero_faq">
            <div className="hero_faq_container">
                <div className="hero_faq_text">
                    <h2>FAQ & Contato</h2>
                </div>
            </div>
        </section>
      </div>
    );
  }
}

export default FaqHero;