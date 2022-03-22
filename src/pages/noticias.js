import React from 'react';
import '../styles/scss/main.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroNoticias from '../components/heroNoticias';

export class Noticias extends React.Component {
  render() {
    return (
      <>
      <Navbar />
      <HeroNoticias />
      <Footer />
      </>
    );
  }
}
  
export default Noticias;