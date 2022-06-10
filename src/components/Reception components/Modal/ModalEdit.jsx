import { useState } from 'react';
import 'src/components/Reception components/Modal/styles.scss';

const ModalEdit = ({ isModalEditActive, editList, setIsModalEditActive, ticket }) => {
  const { id, name, doctor, date, complaint } = ticket;
  const [modalInput, setModalInput] = useState({
    modalName: name,
    modalDoctor: doctor,
    modalDate: date,
    modalComplaint: complaint
  });
  const {modalName, modalDoctor, modalDate, modalComplaint} = modalInput;
  const handleChange = (value, type) => {
    setModalInput({ ...modalInput, [type]: value });
  }
  return (
    <div className={isModalEditActive ? "modal_active" : "modal"} onClick={() => setIsModalEditActive(false)} >
      <div onClick={(e) => e.stopPropagation()}>

      <input placeholder="name" type='text' value={modalName} onChange={(e) => handleChange(e.target.value, 'modalName')} />
      <select placeholder="doctor" type='select' value={modalDoctor} onChange={(e) => handleChange(e.target.value, 'modalDoctor')} />
      <input placeholder="date" type='date' value={modalDate} onChange={(e) => handleChange(e.target.value, 'modalDate')} />
      <input placeholder="complaint" type='text' value={modalComplaint} onChange={(e) => handleChange(e.target.value, 'modalComplaint')} />

      <button onClick={() => setIsModalEditActive(false)}>Отмена</button>
      <button type='submit' onClick={() => editList(modalInput, id)}>Редактировать</button>

      </div>
    </div>
  )
}

export default ModalEdit;