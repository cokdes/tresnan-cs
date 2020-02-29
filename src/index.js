import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, BrowserRouter as Router} from 'react-router-dom';
import Navigation from './components/Navigation';
import App from './App';
import About from './pages/About';
import Donation from './pages/Donation';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const routing = (
  <Router>
    <div>
      <Navigation />
      <Route exact path="/" component={App} />
      <Route path="/about" component={About} />
      <Route path="/donation" component={Donation} />
      <Route path="/contact" component={Contact} />
      <Footer />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
