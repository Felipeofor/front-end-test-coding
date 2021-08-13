import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import CardConteiner from './components/CardConteiner';
import Toast from './components/Toast';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomProvider from './components/CustomProvider';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CustomProvider>
        <Nav/>
        <Switch>
          <Route exact path = '/usuarios' component={ CardConteiner }/>
          <Route exact path = '/usuario/:userLogin' component={ UserDetails }/>
          <Route exact path = '/error' component={ Toast }/>
          <Route exact path = '/' component={ Home }/>
        </Switch>
        </CustomProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
