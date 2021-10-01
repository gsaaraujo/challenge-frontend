import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { Login } from '../pages/Login';

export const AuthRoutes = () => (
  <Switch>
    <Route path='/'>
      <Login />
    </Route>
  </Switch>
);
