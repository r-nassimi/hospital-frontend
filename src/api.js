import axios from 'axios';

export const API_URL = `http://localhost:5000`;

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});

const refresh = async () => {
  try {
    const response = await axios.get(`${API_URL}/refresh`, {
      withCredentials: true,
    });
    localStorage.setItem('token', response.data.accessToken);
  } catch (e) {
    alert('Не авторизован');
  }
};

api.interceptors.response.use((config) => {
    return config;
  }, async (error) => {
    const originalRequest = error.config;
   
    if (error.response.status === 401 && error.config && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      await refresh();
      return api.request(originalRequest);
    } else { 
      throw error;
    }
  } 
);

export default api;