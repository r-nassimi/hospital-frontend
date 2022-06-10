import 'src/components/Reception components/Modal/styles.scss';

const ModalDelete = ({ isModalDeleteActive, setIsModalDeleteActive, deleteList }) => {
  console.log(isModalDeleteActive);
  return (
    <div className={isModalDeleteActive ? "modal_active" : "modal"} onClick={() => setIsModalDeleteActive(false)} >
      <div onClick={(e) => e.stopPropagation()}>
      <button className='cancel' onClick={() => setIsModalDeleteActive(false)}>Отмена</button>
      <button className='confirm' onClick={() => {deleteList(); setIsModalDeleteActive(false)}}>Удалить</button> 
      </div>
    </div>
  )
}

export default ModalDelete;