import api from "src/http/api";

export default class AuthService {
  
  //Static properties are properties of a class, not of an instance of a class.
  static async registration (login, password) {
    return api.post ("/registration", { login, password });
  }

  static async login (login, password) {
    return api.post ("/login", { login, password });
  }

  static async logout () {
    return api.get ("/logout");
  };
}