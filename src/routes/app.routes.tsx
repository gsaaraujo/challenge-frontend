import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { RegisterData } from '../pages/RegisterData';
import { SearchData } from '../pages/SearchData';

export const AppRoutes = () => (
  <Switch>
    <Route path='/'>
      <RegisterData />
    </Route>
    <Route path='/searchData'>
      <SearchData />
    </Route>
  </Switch>
);
