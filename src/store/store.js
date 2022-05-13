import { makeAutoObservable } from "mobx";
import axios from "axios";
import AuthService from "src/services/AuthorizationService";
import { API_URL } from "src/api";

export default class Store {
  user = {};
  authorizated = false;
  registrated = false;
  loading = false;
  errors = "";

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this.user = user;
  }

  setRegistrated(boolean) {
    this.registrated = boolean;
  }

  setAuthorizated(boolean) {
    this.authorizated = boolean;
  }

  setLoading(boolean) {
    this.loading = boolean;
  }

  setErrors(error) {
    this.errors = error;
  }

  async changeMethod() {
    this.setRegistrated(!this.registrated);
  }

  async registration(login, password) {
    try {
      const response = await AuthService.registration(
        login,
        password
      );
      localStorage.setItem("token", response.data.accessToken);
      this.setAuthorizated(true);
      this.setUser(response.data.user);
      this.setErrors(false);
    } catch (e) {
      this.setErrors(
        `Пользователь с логином ${login} уже существует!`
      );
    }
  }

  async login(login, password) {
    try {
      const response = await AuthService.login(login, password);
      localStorage.setItem("token", response.data.accessToken);
      this.setAuthorizated(true);
      this.setUser(response.data.user);
      this.setErrors(false);
    } catch (e) {
      this.setErrors("Данный пользователь не существует!");
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("token");
      this.setAuthorizated(false);
      this.setUser({});
    } catch (e) {
      alert(e.response?.data?.message);
    }
  }

  async checkAuthorization() {
    this.setLoading(true);
    try {
      const response = await axios.get(`${API_URL}/refresh`, {
        withCredentials: true,
      });
      localStorage.setItem("token", response.data.accessToken);
      this.setAuthorizated(true);
      this.setUser(response.data.user);
    } catch (e) {
      alert(e);
    } finally {
      this.setLoading(false);
    }
  }
}
