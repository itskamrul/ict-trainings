import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Abouth from "./components/Abouth/Abouth";
import Contact from "./components/Contact/Contact";
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import NotFound from "./components/NotFound/NotFound";
import Service from "./components/Service/Service";

function App() {
  return (
    <div>
      <Router>
      <Navbar></Navbar>
        <Switch>
          <Route exact path='/'>
            <Header></Header>
          </Route>
          <Route path='/home'>
            <Header></Header>
          </Route>
          <Route path='/service'>
            <Service></Service>
          </Route>
          <Route path='/abouth'>
            <Abouth></Abouth>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
