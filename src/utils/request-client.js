import axios from "axios";

export const requestClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

requestClient.interceptors.request.use(function(config){
  const token = localStorage.getItem('token');
  if(token){
    config.headers.Authorization = `Bearer ${token}`
  }

  return config;
}, (err) => Promise.reject(err));