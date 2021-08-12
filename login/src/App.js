import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import CardConteiner from './components/CardConteiner';
import Toast from './components/Toast';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path = '/' component={ Home }/>
          <Route exact path = '/busqueda' component={ CardConteiner }/>
          <Route exact path = '/:user.login' component={ UserDetails }/>
          <Route exact path = '/error' component={ Toast }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
