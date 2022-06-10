import api from "src/http/api";

export default class ReceptionService {

  static getList() {
    return api.get(`/getList`);
  }
  static createList(name, doctor, date, complaint) {
    return api.post(`/createList`, {name, doctor, date, complaint});
  }

  static updateList(id, name, doctor, date, complaint) {
    return api.patch(`/updateList`, {id, name, doctor, date, complaint});
  }

  static deleteList(id) {
    return api.delete(`/deleteList`, {id})
  }
}
