import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.1.100:6000',
});

export default api;
