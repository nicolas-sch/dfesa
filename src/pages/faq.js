import React from 'react';
import '../styles/scss/main.css';
import Navbar from '../components/navbar';
import FaqHero from '../components/faqHero';
import { FaqPerguntas } from '../components/faqPerguntas';
import Form from '../components/form';
import Footer from '../components/footer';
import FaqCanal from '../components/faqCanal';
import FaqDocumentos from '../components/faqDocumentos';

export class Faq extends React.Component {
    render() {
      return (
        <>
        <Navbar />
        <FaqHero />
        <FaqPerguntas />
        <Form />
        <FaqCanal />
        <FaqDocumentos />
        <Footer />
        </>
      );
    }
  }
  
  export default Faq;