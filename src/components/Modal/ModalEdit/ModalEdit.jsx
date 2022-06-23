import { useState } from 'react';
import { doctorsList } from "src/constants";
import 'src/components/Modal/ModalEdit/styles.scss';

const ModalEdit = ({ setModalEditOpen, editAppointment, ticket }) => {
  const { _id, name, doctor, date, complaint } = ticket;
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
    <div className="modal__edit">
      <div className="modal__edit__block">
        <div className='modal__edit__header'>
          Изменить приём
        </div>
        <div className="modal__edit__block__input">
          <label htmlFor='modal__edit__input__label'>Имя</label>
          <input
            className="modal__edit__block__input__area"
            placeholder="name"
            type='text'
            value={modalName}
            onChange={(e) => handleChange(e.target.value, 'modalName')}
          />
          <label htmlFor='modal__edit__input__label'>Доктор</label>
          <select
            className="modal__edit__block__input__area"
            placeholder="doctor"
            type='select'
            value={modalDoctor}
            onChange={(e) => handleChange(e.target.value, 'modalDoctor')}
          >
            {
              doctorsList.map((doctor, index) =>
                <option value={doctor} key={`doctor-${index}`}>
                  {doctor}
                </option>
              )
            }
          </select>
          <label htmlFor='modal__edit__input__label'>Дата</label>
          <input
            className="modal__edit__block__input__area"
            placeholder="date"
            type='text'
            value={modalDate}
            onChange={(e) => handleChange(e.target.value, 'modalDate')}
          />
          <label htmlFor='modal__edit__input__label'>Жалоба</label>
          <input
            className="modal__edit__block__input__area"
            placeholder="complaint"
            type='text'
            value={modalComplaint}
            onChange={(e) => handleChange(e.target.value, 'modalComplaint')}
          />
          <div className="modal__edit__block__buttons">
            <button
            type="button"
              onClick={() => setModalEditOpen(false)}>
              Отмена
            </button>
            <button
              type="button"
              disabled={checker}
              onClick={() => editAppointment(modalInput, _id)}>
              Редактировать
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalEdit;