import api from "src/http/api";

export default class ReceptionService {
  static async getList() {
    return api.get(
      `/getList?user_id=${localStorage.getItem("user_id")}`
    );
  }
}
