import React from 'react';
import '../styles/scss/main.css';
import Navbar from '../components/navbar';
import HeroSobre from '../components/heroSobre';
import SobreFazemos from '../components/sobreFazemos';
import SobreEstrutura from '../components/sobreEstrutura';
import SobreDesenvolvimento from '../components/sobreDesenvolvimento';
import SobreTrajetoria from '../components/sobreTrajetoria';
import Footer from '../components/footer';

export class Sobre extends React.Component {
    render() {
      return (
        <>
        <Navbar />
        <HeroSobre />
        <SobreFazemos />
        <SobreEstrutura />
        <SobreDesenvolvimento />
        <SobreTrajetoria />
        <Footer />
        </>
      );
    }
  }
  
  export default Sobre;