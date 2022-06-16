import axios from 'axios';
import { API_URL } from "src/constants";

const api = axios.create({
  baseURL: API_URL,
  headers:{
    accessToken: localStorage.getItem('accessToken'),
    refreshToken: localStorage.getItem('refreshToken')
  }
});

api.interceptors.response.use((config) => {
  return config;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
    originalRequest._isRetry = true;
    await api.get(`/refresh`);
    return api.request(originalRequest);
  } else {
    throw error;
  };
});

export default api;  