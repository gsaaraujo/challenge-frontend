import React from 'react';
import ReactDOM from 'react-dom';
import { Login } from './pages/Login';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>,
  document.getElementById('root'),
);
