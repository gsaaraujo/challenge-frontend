import React from 'react';

import { Switch, Route } from 'react-router-dom';

import { SearchData } from '../pages/SearchData';
import { RegisterData } from '../pages/RegisterData';
import { SearchCompany } from '../pages/SearchCompany';
import { RegisterCompany } from '../pages/RegisterCompany';

export const AppRoutes = () => (
  <Switch>
    <Route path='/' component={RegisterCompany} exact />

    <Route path='/registerData' component={RegisterData} exact />
    <Route path='/registerCompany' component={RegisterCompany} exact />

    <Route path='/searchCompany' component={SearchCompany} exact />
    <Route path='/searchData' component={SearchData} exact />
  </Switch>
);
