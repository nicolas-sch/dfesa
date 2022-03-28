import React from 'react';
import '../styles/scss/main.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroNoticias from '../components/heroNoticias';
import ImageHeroNoticias from '../components/imageNoticias';
export class Noticias extends React.Component {
  render() {
    return (
      <>
      <Navbar />
      <ImageHeroNoticias />
      <HeroNoticias />
      <Footer />
      </>
    );
  }
}
  
export default Noticias;