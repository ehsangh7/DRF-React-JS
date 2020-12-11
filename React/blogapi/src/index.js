import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Route ,BrowserRouter as Router, Switch} from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Register from './components/auth/register';
import Login from './components/auth/login';
import Logout from './components/auth/logout';
import Single from './components/posts/single';
import Search from './components/posts/search';
import Admin from './Admin';
import Create from './components/admin/create';
import Edit from './components/admin/edit';
import Delete from './components/admin/delete';



ReactDOM.render(
    <Router>
      <React.StrictMode>
        <Header />
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/admin" component={Admin} />
          <Route path="/admin/create" component={Create} />
          <Route path="/admin/edit/:id" component={Edit} />
          <Route path="/admin/delete/:id" component={Delete} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/logout" component={Logout} />
          <Route path="/post/:slug" component={Single} />
          <Route path="/search" component={Search} />
        </Switch>
        <Footer />
    </React.StrictMode>
  </Router>, document.getElementById('root'));


reportWebVitals();