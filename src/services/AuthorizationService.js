//Static properties are properties of a class, not of an instance of a class.
import api from "src/api";

export default class AuthService {
  static async registration (login, password) {
    return api.post ("/registration", { login, password });
  }

  static async login (login, password) {
    return api.post ("/login", { login, password });
  }

  static async logout () {
    return api.post ("/logout");
  }
}