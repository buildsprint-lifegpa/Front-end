import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import SignInPage from './Components/SignInPage';
import Home from './Components/Home';
import FormikSignUp from './Components/SignUp';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path="/sign-in" component={SignInPage} />
      <Route exact path='/sign-up' component={FormikSignUp}/>
    </div>
  );
}

export default App;
