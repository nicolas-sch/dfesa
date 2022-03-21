import React from 'react';
import axios from 'axios';
import '../styles/scss/main.css';

export class FaqHero extends React.Component {
  state = {
    faqs: [],
    error: null,
  };
  
  
  componentDidMount = async () => {
    try {
      const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/faqs`);
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
            <section className="hero_faq">
                <div className="hero_faq_container">
                    <div className="hero_faq_text">
                        <h2>{faq.faqTitulo}</h2>
                    </div>
                </div>
            </section>
        ))}
      </div>
    );
  }
}

export default FaqHero;