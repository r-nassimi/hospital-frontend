import axios from 'axios';
import { API_URL } from "src/constants";
import refresh from 'src/store/store';

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
    const originalRequest = error.config;

    if (error.response.status === 401 && error.config && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      await refresh();
      return api.request(originalRequest);
    } else {

      //It is used to create exceptions. In this code, after the if condition, an exception is thrown in the form of an error
      throw error;
    }
  } 
);

export default api;
