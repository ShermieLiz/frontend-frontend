import React from 'react';
import { Route } from 'react-router-dom';

// Views
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Signup from './components/Signup';
import UsersList from './components/UsersList';
import Principal from './components/Principal';
import NewEmployee from './components/NewEmployee';
import Employee from './components/Employee'

export default
  <React.Fragment>
    <Route
      exact path="/"
      component={ Home } />
    <Route
      exact path="/login"
      component={ Login } />
    <Route
      exact path="/logout"
      component={ Logout } />
    <Route
      exact path="/signup"
      component={ Signup } />
    <Route
      exact path="/users"
      component={ UsersList } />
    <Route
      exact path="/NewEmployee"
      component={NewEmployee} />
    <Route
      exact path="/Employee"
      component={Employee} />
    <Route
      exact path="/Principal"
      component={Principal} />
  </React.Fragment>
;