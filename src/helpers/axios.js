import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL,
  headers: {
    ['x-key']: process.env.X_KEY,
    ['Content-Type']: 'application/json'
  }
});

export default instance;
