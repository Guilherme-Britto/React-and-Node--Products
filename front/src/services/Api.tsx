import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://react-and-node-products.onrender.com',
  timeout: 10000,
});
