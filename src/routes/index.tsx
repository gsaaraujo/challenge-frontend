import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

import { AppRoutes } from './app.routes';
import { AuthRoutes } from './auth.routes';

import { CompanyProvider } from '../context/companyProvider';
import { ClientDataProvider } from '../context/clientDataProvider';

export const Routes = () => {
  const { user } = useAuth();

  return (
    <Router>
      {user ? (
        <CompanyProvider>
          <ClientDataProvider>
            <AppRoutes />
          </ClientDataProvider>
        </CompanyProvider>
      ) : (
        <AuthRoutes />
      )}
    </Router>
  );
};
