import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';

// with this you dont have to type the full url
// do this: axios.get(/login).then().catch()
axios.defaults.baseURL = 'https://bs-lifegpa.herokuapp.com';


// this will place the token we stored to local storage to the authorization header
axios.interceptors.request.use(
  options => {
    options.headers.authorization = `${localStorage.token}`;
    return options;
  },
  err => {
    // do something with the error
    return Promise.reject(err);
  }
);

ReactDOM.render(
  <Router>
    <App />
  </Router>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
