import React from 'react';
import '../styles/scss/main.css';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import About from '../components/about';
import News from '../components/news';
import BigNumbers from '../components/bignumbers';
import Barragem from '../components/barragem';
import Vertedouro from '../components/vertedouro';
import Casa from '../components/casaForca';
import Reservatorio from '../components/reservatorio';
import Subestacao from '../components/subestacao';
import Areas from '../components/areas';
import Tecnologia from '../components/tecnologia';
import Duvidas from '../components/duvidas';
import Footer from '../components/footer';

export class Home extends React.Component {
    render() {
      return (
        <>
        <Navbar />
        <Hero />
        <About />
        <News />
        <BigNumbers />
        <Barragem />
        <Vertedouro />
        <Casa />
        <Reservatorio />
        <Subestacao />
        <Areas />
        <Tecnologia />
        <Duvidas />
        <Footer />
        </>
      );
    }
  }
  
  export default Home;