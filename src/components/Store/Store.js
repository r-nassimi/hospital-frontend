import { makeAutoObservable } from "mobx";
import authService from "src/components/Services/Authorization-service";
import axios from "axios";
import { API_URL } from "src/components/Adress/Adress";

export default class Store {
  user = {};
  Authorizated = false;
  Registrated = false;
  Loading = false;
  Errors = '';

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this.user = user;
  }

  setAuthorizated(bool) {
    this.Authorizated = bool;
  }

  setLoading(bool) {
    this.Loading = bool;
  }

  setErrors(error) {
    this.Errors = error;
  }

  setRegistrated(bool) {
    this.Registrated = bool;
  }

  async changeMethod() {
    this.setRegistrated(!this.Registrated)
  }

  async registration(login, password) {
    try {
      const response = await authService.registration(login, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuthorizated(true);
      this.setUser(response.data.user);
      this.setErrors(false);
    } catch (e) {
      this.setErrors(`Пользователь с логином ${login} уже существует!`)
    }
  }

  async login(login, password) {
    try {
      const response = await authService.Login(login, password);
      localStorage.setItem('token', response.data.accessToken);
      this.setAuthorizated(true);
      this.setUser(response.data.user);
      this.setErrors(false)
    } catch (e) {
      this.setErrors('Данный пользователь не существует!');
    }
  }

  async logout(login, password) {
    try {
      const response = await authService.logout();
      localStorage.removeItem('token');
      this.setAuthorizated(false);
      this.setUser({});
    } catch (e) {
      console.log(e.response?.data?.message);
    }
  }

  async checkAuthorization() {
    this.Loading(true);
    try {
      const response = await axios.get(`${API_URL}/refresh`, { withCredentials: true });
      localStorage.setItem('token', response.data.accessToken);
      this.Authorizated(true);
      this.user(response.data.user);
    } catch (e) {
      console.log(e);
    } finally {
      this.Loading(false);
    }
  }
}