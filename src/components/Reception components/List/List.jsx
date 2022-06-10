import { useState, useContext } from 'react';
import { Context } from 'src/index';
import ModalEdit from 'src/components/Reception components/Modal/ModalEdit';
import ModalDelete from 'src/components/Reception components/Modal/ModalDelete';
import deleteLogo from 'src/logos/Trash.svg';
import editLogo from 'src/logos/Edit.svg';

const List = ({ reception, list, setList }) => {
  const {name, doctor, date, complaint} = reception
  const newReception = { ...reception };
  const handleBuild = (value, type) => {
    newReception[type] = value;
  }
  const [isModalEditActive, setIsModalEditActive] = useState(false);
  const [isModalDeleteActive, setIsModalDeleteActive] = useState(false);
  const [ticket, setTicket] = useState({});
  const { store } = useContext(Context);

  const openEditModal = (reception) => {
    setTicket(reception);
    setIsModalEditActive(true);
  }

  const openDeleteModal = (reception) => {
    setTicket(reception);
    setIsModalDeleteActive(true);
  }

  const editList = async (reception, id) => {
    const { modalName, modalDoctor, modalDate, modalComplaint } = reception;
    const response = await store.updateList(id, modalName, modalDoctor, modalDate, modalComplaint);
    setList(response.data);
    setIsModalEditActive(false);
  }

  const deleteList = async () => {
    const { _id } = ticket;
    const response = await store.deleteList(_id);
    const filtration = list.filter((list) => list._id !== _id);
    setList(filtration);
    setIsModalDeleteActive(false);
  }

  return (
    <div className='list'>
      <table>
        <thead>
          <tr>
            <td>Имя</td>
            <td>Врач</td>
            <td>Дата</td>
            <td>Жалобы</td>
          </tr>
        </thead>
        <tbody>
          <>
          <tr className='table'>
    <td className='table__name'>{name}</td>
    <td className='table__doctor'>{doctor}</td>
    <td className='table__date'>{date}</td>
    <td className='table__complaint'>{complaint}</td>
          </tr>
          </>
        </tbody>
      </table>
      <ModalEdit isModalEditActive={isModalEditActive} setIsModalEditActive={setIsModalEditActive} ticket={ticket} editList={editList} />
      <ModalDelete isModalDeleteActive={isModalDeleteActive} setIsModalDeleteActive={setIsModalDeleteActive} deleteList={deleteList} />
    </div>

  )
}

export default List;