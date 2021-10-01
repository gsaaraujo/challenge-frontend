import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';
import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

export const Routes = () => {
  const { user } = useAuth();

  return <Router>{user ? <AppRoutes /> : <AuthRoutes />}</Router>;
};
