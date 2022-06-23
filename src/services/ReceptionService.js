import api from "src/http/api";

export default class ReceptionService {
  static getList() {
    return api.get(`/getList`);
  }

  static createAppointment(name, doctor, date, complaint) {
    return api.post(`/createList`, {
      name,
      doctor,
      date,
      complaint,
    });
  }

  static updateAppointment(_id, name, doctor, date, complaint) {
    return api.patch(`/updateList`, {
      _id,
      name,
      doctor,
      date,
      complaint,
    });
  }

  static deleteAppointment(_id) {
    return api.delete(`/deleteList?_id=${_id}`);
  }
}