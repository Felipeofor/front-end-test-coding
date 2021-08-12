import './App.css';
import Nav from './components/Nav';
import Card from './components/Card';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path = '/:user.login' component={ Card }/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
