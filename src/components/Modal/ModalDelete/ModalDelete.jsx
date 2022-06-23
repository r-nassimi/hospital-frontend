import 'src/components/Modal/ModalDelete/styles.scss';

const ModalDelete = ({ modalDeleteOpen, setModalDeleteOpen, deleteAppointment }) => {
  return (
    <div className="modal__delete">
      <div className="modal__delete__block">
        <div className='modal__delete__header'>
          Удалить приём
        </div>
        <div className='modal__delete__label'>
          Вы действительно хотите удалить приём?
        </div>
        <button 
        className='cancel' 
        type='button' 
        onClick={() => setModalDeleteOpen(false)}>
          Отмена
        </button>
        <button 
        className='confirm' 
        type='button' 
        onClick={deleteAppointment}>
          Удалить
        </button>
      </div>
    </div>
  )
}

export default ModalDelete;