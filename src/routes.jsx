import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';

const Routes = () => (
  <Switch>
    <Route path="/register" component={ Signup } />
    <Route path="/login" component={ Login } />
    <Route path="/" component={ Home } />
  </Switch>
);

export default Routes;
