import React, { Component } from 'react';
import './styles/scss/main.css';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import Sustentabilidade from './pages/sustentabilidade';
import Sobre from './pages/sobre';
import Faq from './pages/faq';
import Politicas from './pages/politicaseprivacidade';
import Noticias from './pages/noticias';
import NoticiasDetails from './components/noticiasDetails';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  
  
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sustentabilidadeedesenvolvimento' component={Sustentabilidade}/>
        <Route exact path='/sobre' component={Sobre}/>
        <Route exact path='/faq' component={Faq}/>
        <Route exact path='/politicas' component={Politicas}/>
        <Route exact path= '/noticias' component={Noticias}/>
        <Route path="/noticiasDetails/:id">
          <NoticiasDetails />
        </Route>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
