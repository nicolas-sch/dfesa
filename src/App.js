import React, { Component } from 'react';
import './styles/scss/main.css';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import Sustentabilidade from './pages/sustentabilidade';
import Sobre from './pages/sobre';
import Faq from './pages/faq';


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sustentabilidadeedesenvolvimento' component={Sustentabilidade}/>
        <Route exact path='/sobre' component={Sobre}/>
        <Route exact path='/faq' component={Faq}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
