import axios from 'axios';
import { Context } from 'src/index';
import { API_URL } from "src/constants";
import { useContext } from 'react';


const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

api.interceptors.response.use((config) => {
    return config;
  }, async (error) => { 
    const { store } = useContext(Context);
    const originalRequest = error.config;
    if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      await store.refresh();
      return api.request(originalRequest);
    } else { 
      throw error;
    }
  } 
);

export default api; 