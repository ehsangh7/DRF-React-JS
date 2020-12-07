import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route ,BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/register';
import Login from './components/login';
import Logout from './components/logout';





ReactDOM.render(
    <Router>
      <React.StrictMode>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />

        </Switch>
        <Footer />
    </React.StrictMode>
  </Router>, document.getElementById('root'));


reportWebVitals();