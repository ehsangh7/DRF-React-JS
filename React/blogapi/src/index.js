import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';



ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
        </Switch>
        <Footer />
    </Router>
  </React.StrictMode>, document.getElementById('root'));


reportWebVitals();