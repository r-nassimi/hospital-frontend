import AuthService from "src/services/AuthorizationService";
import ReceptionService from "src/services/ReceptionService";

export default class Store {
  user = {};
  authorizated = false;
  loading = false;
  reception = [];
  errors = "";

  setUser(user) {
    this.user = user;
  }

  setAuthorizated(boolean) {
    this.authorizated = boolean;
  }

  setLoading(boolean) {
    this.loading = boolean;
  }

  setReception(reception) {
    this.reception = reception;
  }

  setErrors(error) {
    this.errors = error;
  }

  async registration(login, password) {
    try {
      const response = await AuthService.registration(
        login,
        password
      );
      localStorage.setItem("accessToken", response.data.accesstoken);
      localStorage.setItem("refreshToken",response.data.refreshtoken);
      this.setAuthorizated(true);
      this.setUser(response.data.user);
    } catch (e) {
      this.setErrors(
        `Произошла трагедия во время регистрации пользователя ${login}!`
      );
    }
  }

  async login(login, password) {
    try {
      const response = await AuthService.login(login, password);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken",response.data.refreshToken);
      this.setAuthorizated(true);
      this.setUser(response.data.user);
    } catch (e) {
      this.setErrors(
        `Произошла трагедия во время авторизации пользователя ${login}!`
      );
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      this.setAuthorizated(false);
      this.setUser({});
    } catch (e) {
      this.setErrors(e.response.data.message);
    }
  }

  async checkAuthorization() {
    this.setLoading(true);
    try {
      const response = await AuthService.refresh();
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken",response.data.refreshToken);
      this.setAuthorizated(true);
      this.setUser(response.data.user);
    } catch (e) {
      this.setErrors(e.response?.data?.message);
      this.setUser({});
    } finally {
      this.setLoading(false);
    }
  }

  async getList() {
    try {
      const response = await ReceptionService.getList();
      localStorage.getItem("accessToken", response.data.accessToken);
      localStorage.getItem("refreshToken", response.data.refreshToken);
      this.setReception(response.data);
      return response;
    } catch (e) {
      this.setErrors(e.response?.data?.message);
    }
  }

  async createList(name, doctor, date, complaint) {
    try {
      const response = await ReceptionService.createList(
        name,
        doctor,
        date,
        complaint
      );
      localStorage.getItem("accessToken", response.data.accessToken);
      localStorage.getItem("refreshToken", response.data.refreshToken);
      this.setUser(response.data);
      return response;
    } catch (e) {
      this.setErrors("Не удалось создать данные!");
    }
  }

  async updateList(id, name, doctor, date, complaint) {
    try {
      const response = await ReceptionService.updateList(
        id,
        name,
        doctor,
        date,
        complaint
      );
      localStorage.getItem("accessToken", response.data.accessToken);
      localStorage.getItem("refreshToken", response.data.refreshToken);
      this.setUser(response.data);
      return response;
    } catch (e) {
      this.setErrors("Не удалось обновить данные!");
    }
  }

  async deleteList(id) {
    try {
      const response = await ReceptionService.deleteList(id);
      localStorage.getItem("accessToken", response.data.accessToken);
      localStorage.getItem("refreshToken", response.data.refreshToken);
      this.setUser(response.data);
    } catch (e) {
      this.setErrors("Не удалось удалить данные!");
    }
  }
}
