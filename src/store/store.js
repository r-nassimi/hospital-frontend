import AuthService from "src/services/AuthorizationService";
import ReceptionService from "src/services/ReceptionService";

export default class Store {
  user = {};
  errors = "";

  setUser(user) {
    this.user = user;
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
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem(
        "refreshToken",
        response.data.refreshToken
      );
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
      localStorage.setItem(
        "refreshToken",
        response.data.refreshToken
      );
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
      localStorage.removeItem(
        "accessToken",
        response.data.accessToken
      );
      localStorage.removeItem(
        "refreshToken",
        response.data.refreshToken
      );
      this.setUser({});
    } catch (e) {
      this.setErrors(e.response.data.message);
    }
  }

  async checkAuthorization() {
    try {
      const response = await AuthService.refresh();
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem(
        "refreshToken",
        response.data.refreshToken
      );
      this.setUser(response.data.user);
    } catch (e) {
      this.setErrors(e.response?.data?.message);
      this.setUser({});
    }
  }

  async getList() {
    try {
      const response = await ReceptionService.getList();
      return response;
    } catch (e) {
      this.setErrors(e.response?.data?.message);
    }
  }

  async createAppointment(name, doctor, date, complaint) {
    try {
      const response = await ReceptionService.createAppointment(
        name,
        doctor,
        date,
        complaint
      );
      return response;
    } catch (e) {
      this.setErrors("Не удалось создать данные!");
    }
  }

  async updateAppointment(id, name, doctor, date, complaint) {
    try {
      const response = await ReceptionService.updateAppointment(
        id,
        name,
        doctor,
        date,
        complaint
      );
      return response;
    } catch (e) {
      this.setErrors("Не удалось обновить данные!");
    }
  }

  async deleteAppointment(_id) {
    try {
      const response = await ReceptionService.deleteAppointment(_id);
    } catch (e) {
      this.setErrors("Не удалось удалить данные!");
    }
  }
}