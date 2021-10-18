import React from 'react';
import '../styles/scss/main.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroPoliticas from '../components/politicasHero';
import PoliticasText from '../components/politicasText';

export class Politicas extends React.Component {
    render() {
      return (
        <>
        <Navbar />
        <HeroPoliticas />
        <PoliticasText />
        <Footer />
        </>
      );
    }
  }
  
  export default Politicas;