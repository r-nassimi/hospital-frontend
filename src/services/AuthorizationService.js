import api from "src/http/api";

export default class AuthService {
  
  //Static properties are properties of a class, not of an instance of a class.
  static registration(login, password) {
    return api.post("/registration", { login, password });
  }

  static login(login, password) {
    return api.post("/login", { login, password });
  }

  static logout() {
    return api.get("/logout");
  }

  static refresh() {
    return api.get("/refresh");
  }
}
