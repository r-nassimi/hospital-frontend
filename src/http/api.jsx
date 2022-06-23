import axios from "axios";
import { API_URL } from "src/constants";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.accessToken = `${localStorage.getItem("accessToken")}`;
  config.headers.refreshToken = `${localStorage.getItem("refreshToken")}`;
  return config;
});

api.interceptors.response.use((config) => {
  return config;
}, async (error) => {
  const originalRequest = error.config;
  if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
    originalRequest._isRetry = true;
    try {
      await api.get(`/refresh`);
      return api.request(originalRequest);
    } catch (e) {
      alert(e)
    }
  } else {
    throw error;
  };
});

export default api;  