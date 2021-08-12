import './App.css';
import Nav from './components/Nav';
import UserDetails from './components/UserDetails';
import CardConteiner from './components/CardConteiner';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path = '/users' component={ CardConteiner }/>
          <Route exact path = '/:user.login' component={ UserDetails }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
