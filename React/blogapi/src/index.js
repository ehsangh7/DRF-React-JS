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
import Single from './components/single';







ReactDOM.render(
    <Router>
      <React.StrictMode>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route  path="/register" component={Register} />
          <Route  path="/login" component={Login} />
          <Route  path="/logout" component={Logout} />
          <Route  path="/post/:slug" component={Single} />

        </Switch>
        <Footer />
    </React.StrictMode>
  </Router>, document.getElementById('root'));


reportWebVitals();