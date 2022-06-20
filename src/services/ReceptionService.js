import api from "src/http/api";

export default class ReceptionService {
  static getList() {
    return api.get(`/getList`);
  };

  static createAppointment(name, doctor, date, complaint) {
    return api.post(`/createList`, { 
      name, 
      doctor, 
      date, 
      complaint 
    });
  };
};