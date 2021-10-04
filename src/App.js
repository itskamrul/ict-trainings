import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
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
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
