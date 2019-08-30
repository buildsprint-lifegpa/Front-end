import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import SignInPage from './Components/SignInPage';
import Home from './Components/Home';
import FormikSignUp from './Components/SignUp';
import PrivateRoute from './Components/PrivateRoute';
import Dashboard from './Components/Dashboard';
import AppFooter from './Components/AppFooter';
import CategorySelect from './Components/Category';
// import ChooseHabit from './Components/HabitSelect';
// import SignUp from './Components/SignUp2';
import CreateHabitHeader from './Components/CreateHabitHeader';


// protected comopnents will be used with PrivateRoute. You can look at what the code is doing later.
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path="/sign-in" component={SignInPage} />
      <Route exact path='/sign-up' component={FormikSignUp} />
      <Route path='/add-habit' component={CategorySelect} />
      <Route path='/habit-header' component={CreateHabitHeader} />
      <PrivateRoute path="/dashboard" component={Dashboard} />
      {/* <PrivateRoute path="/dashboard" component={AppFooter} /> */}
    </div>
  );
}

export default App;
