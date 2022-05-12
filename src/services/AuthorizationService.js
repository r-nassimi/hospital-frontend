import axios from "axios";
// import api from "src/api"; api removed to fix

export default class AuthService {
  static async registration (login, password) {
    return axios.post ("http://localhost:5000/registration", { login, password });
  }

  static async login (login, password) {
    return axios.post ("http://localhost:5000/login", { login, password });
  }

  static async logout () {
    return axios.post ("http://localhost:5000/logout");
  }
}

//Static properties are properties of a class, not of an instance of a class.