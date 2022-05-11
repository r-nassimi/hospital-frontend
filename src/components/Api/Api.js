import axios from 'axios';

export const API_URL = `http://localhost:5000`;

const Adress = axios.create({
  withCredentials: true,
  baseUrl: API_URL
});

Adress.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
})

Adress.interceptors.response.use((config) => {
  return config;
},
  async (error) => {
    const request = error.config;
    if (error.response.status === 401 && error.config && !request._isRetry) {
      request._isRetry = true;
      try {
        const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
        localStorage.setItem('token', response.data.AcessToken);
        return Adress.request(request);
      } catch (e) {
        console.error(e, 'Не авторизован!');
      }
    } else {
      throw error;
    }
  },
);

export default Adress;