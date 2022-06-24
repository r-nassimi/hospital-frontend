import { useState, useContext } from "react";
import { Context } from "src";
import Moment from "react-moment";
import ModalEdit from "src/components/Modal/ModalEdit/ModalEdit";
import ModalDelete from "src/components/Modal/ModalDelete/ModalDelete";
import { tableHeader } from "src/constants";
import deleteLogo from "src/logos/delete.svg";
import editLogo from "src/logos/edit.svg"
import "./style.scss";

const List = ({ list, setList, sortReception }) => {
  const { store } = useContext(Context);
  const [modalEditOpen, setModalEditOpen] = useState(false);
  const [modalDeleteOpen, setModalDeleteOpen] = useState(false);
  const [chooseAppointment, setChooseAppointment] = useState("");

  const openEdit = (reception) => {
    setChooseAppointment(reception);
    setModalEditOpen(true);
  }

  const openDelete = (reception) => {
    setChooseAppointment(reception);
    setModalDeleteOpen(true);
  }

  const editAppointment = async (reception, id) => {
    const {modalName, modalDoctor, modalDate, modalComplaint} = reception;
    const response = await store.updateAppointment(
      id, 
      modalName, 
      modalDoctor, 
      modalDate,
      modalComplaint
    );
    setList(response.data);
    setModalEditOpen(false);
  };

  const deleteAppointment = async () => {
    const {_id} = chooseAppointment;
    await store.deleteAppointment(_id);
    const result = list.filter((list) => list._id !== _id);
    setList(result);
    setModalDeleteOpen(false);
  }

  return (
    <div className="list">
      <table className="list__table">
        <tbody>
          {
            tableHeader.map(th =>
              <th
                className="list__table__header"
                key={`header-${th.id}`}
              >
                {th.label}
              </th>
            )
          }
          {
            list.map(({ _id, name, doctor, date, complaint }, index) =>
              <tr
                className="list__table__line"
                key={`list-${_id}`}
              >
                <td className="list__table__line__data">
                  {name}
                </td>
                <td className="list__table__line__data">
                  {doctor}
                </td>
                <td className="list__table__line__data">
                  <Moment format="DD-MM-YYYY">
                    {date}
                  </Moment>
                </td>
                <td className="list__table__line__data">
                  {complaint}
                </td>
                <td className="list__table__line__data">
                  <button
                    type="button"
                    className="list__table__button"
                    onClick={() => openDelete(list[index])}
                  >
                    <img
                      src={deleteLogo}
                      alt="">
                    </img>
                  </button>
                  <button
                    type="button"
                    className="list__table__button"
                    onClick={() => openEdit(list[index])}
                  >
                    <img
                      src={editLogo}
                      alt="">
                    </img>
                  </button>
                </td>
              </tr>
            )
          }
        </tbody>
      </table>
      {modalDeleteOpen && 
      <ModalDelete 
      modalDeleteOpen={modalDeleteOpen}
      setModalDeleteOpen={setModalDeleteOpen} 
      deleteAppointment={deleteAppointment} 
      />}
      {modalEditOpen && 
      <ModalEdit 
      modalEditOpen={modalEditOpen}
      setModalEditOpen={setModalEditOpen} 
      chooseAppointment={chooseAppointment} 
      editAppointment={editAppointment} 
      />}
    </div>
  )
}

export default List;