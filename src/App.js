import './styles/scss/main.css';
import {BrowserRouter as Router, Switch, Route, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import Sustentabilidade from './pages/sustentabilidade';


function App() {
  return (
    <>
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/sustentabilidadeedesenvolvimento' component={Sustentabilidade}/>
      </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
