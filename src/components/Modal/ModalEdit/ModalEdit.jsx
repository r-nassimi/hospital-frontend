import { useState } from "react";
import { doctorsList } from "src/constants";
import "src/components/Modal/ModalEdit/styles.scss";

const ModalEdit = ({ modalEditOpen, setModalEditOpen, editAppointment, chooseAppointment }) => {
  const { _id, name, doctor, date, complaint } = chooseAppointment;
  const [modalInput, setModalInput] = useState({
    modalName: name,
    modalDoctor: doctor,
    modalDate: date,
    modalComplaint: complaint
  });
  const { modalName, modalDoctor, modalDate, modalComplaint } = modalInput;

  const handleChange = (value, type) => {
    setModalInput({ ...modalInput, [type]: value });
  }

  const checker = !modalName || !modalDoctor || !modalDate || !modalComplaint;

  return (
    <div className={modalEditOpen ? "modalWrap active" : "modalWrap"} onClick={() => setModalEditOpen(false)}>
      <div className={modalEditOpen ? "modal active" : "modal"} onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <p>Изменить приём</p>
        </div>
        <div className="modal__form">
          <label htmlFor="modalName">
            Имя
          </label>
          <input
            className="modal__form__input"
            type="text"
            value={modalName}
            onChange={(e) => handleChange(e.target.value, "modalName")} />
          <label htmlFor="modalDoctor">
            Доктор
          </label>
          <select
            className="modal__form__input"
            placeholder="doctor"
            type="select"
            value={modalDoctor}
            onChange={(e) => handleChange(e.target.value, "modalDoctor")}
          >
            {
              doctorsList.map((doctor, index) =>
                <option value={doctor} key={`doctor-${index}`}>
                  {doctor}
                </option>
              )
            }
          </select>
          <label htmlFor="modalDate">
            Дата
          </label>
          <input
            className="modal__form__input"
            type="date"
            value={modalDate}
            onChange={(e) => handleChange(e.target.value, "modalDate")} />
          <label htmlFor="modalComplaint"></label>
          Жалоба
          <input
            className="modal__form__input"
            type="text"
            value={modalComplaint}
            onChange={(e) => handleChange(e.target.value, "modalComplaint")} />
        </div>
        <div className="modal__function">
          <button
            className="modal__function__button"
            type="button"
            onClick={() => setModalEditOpen(false)}>
            Отмена
          </button>
          <button
            className="modal__function__button"
            type="button"
            disabled={checker}
            onClick={() => editAppointment(modalInput, _id)}>
            Редактировать
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalEdit;