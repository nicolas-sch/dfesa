import React from 'react';
import '../styles/scss/main.css';
import Navbar from '../components/navbar';
import FaqHero from '../components/faqHero';
import FaqPerguntas from '../components/faqPerguntas';
import Footer from '../components/footer';

export class Faq extends React.Component {
    render() {
      return (
        <>
        <Navbar />
        <FaqHero />
        <FaqPerguntas />
        <Footer />
        </>
      );
    }
  }
  
  export default Faq;