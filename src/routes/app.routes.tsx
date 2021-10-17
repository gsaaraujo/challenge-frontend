import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { SearchData } from '../pages/SearchData';
import { RegisterData } from '../pages/RegisterData';
import { RegisterCompany } from '../pages/RegisterCompany';

export const AppRoutes = () => (
  <Switch>
    <Route path='/registerData' component={RegisterData} exact />
    <Route path='/searchData' component={SearchData} />
    <Route path='/registerCompany' component={RegisterCompany} exact />
    <Route path='/registerData' component={RegisterData} exact />
  </Switch>
);
