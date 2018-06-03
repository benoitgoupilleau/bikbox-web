import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.API_URL,
  timeout: 1000,
  headers: { 'x-key': process.env.X_KEY, 'Access-Control-Allow-Origin': '*' }
});

export default instance;
