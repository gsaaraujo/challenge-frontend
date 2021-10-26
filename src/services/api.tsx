import axios from 'axios';

export const baseApi = axios.create({
  baseURL: 'http://localhost/api/',
  headers: {
    'Content-type': 'application/json',
  },
});
