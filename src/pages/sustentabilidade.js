import React from 'react';
import '../styles/scss/main.css';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import HeroSustentabilidade from '../components/heroSustentabilidade';
import AboutSustentabilidade from '../components/aboutSustentabilidade';
import AboutParque from '../components/aboutParque';
import ProgramasAmbientais from '../components/programasAmbientais';
// import Utilidades from '../components/utilidades';

export class Sustentabilidade extends React.Component {
    render() {
      return (
        <>
        <Navbar />
        <HeroSustentabilidade />
        <AboutSustentabilidade />
        <AboutParque />
        <ProgramasAmbientais />
        {/* <Utilidades /> */}
        <Footer />
        
        
        
        </>
      );
    }
  }
  
  export default Sustentabilidade;