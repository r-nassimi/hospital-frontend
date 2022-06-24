import "src/components/Modal/ModalDelete/styles.scss";

const ModalDelete = ({ modalDeleteOpen, setModalDeleteOpen, deleteAppointment }) => {
  return (
    <div className={modalDeleteOpen ? "modalWrap active" : "modalWrap"} onClick={() => setModalDeleteOpen(false)}>
      <div className={modalDeleteOpen ? "modal active" : "modal"} onClick={(e) => e.stopPropagation()}>
        <div className="modal__header">
          <p>Удалить приём</p>
        </div>
        <div className="modal__label">
          Вы действительно хотите удалить приём?
        </div>
        <div className="modal__function">
          <button 
            className="modal__function__button" 
            onClick={() => setModalDeleteOpen(false)}>
              Отмена
          </button>
          <button
            className="modal__function__button"
            onClick={deleteAppointment}>
              Удалить
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModalDelete;