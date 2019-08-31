import React from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import SignInPage from './Components/SignInPage';
import Home from './Components/Home';
import FormikSignUp from './Components/SignUp';
import PrivateRoute from './Components/PrivateRoute';
import Dashboard from './Components/Dashboard';
import ChooseHabit from './Components/HabitSelect';
import CreateHabitHeader from './Components/CreateHabitHeader';
import UserHabits from './Components/UserHabits';


// protected comopnents will be used with PrivateRoute. You can look at what the code is doing later.
function App() {
  return (
    <div className="App">
      <Route exact path='/' component={Home} />
      <Route exact path="/sign-in" component={SignInPage} />
      <Route exact path='/sign-up' component={FormikSignUp} />
      <Route path='/choose-habit' component={ChooseHabit} />
      <Route path='/habit-header' component={CreateHabitHeader} />
      <PrivateRoute exact path="/dashboard/:id" component={Dashboard} />
      <PrivateRoute exact path="/dashboard/:id/user-habits" component={UserHabits} />
    </div>
  );
}

export default App;
