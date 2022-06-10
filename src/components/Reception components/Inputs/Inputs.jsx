import { useContext } from "react";
import { Context } from "src/index";
import { DoctorsList } from 'src/constants';

const Inputs = ({ setList, reception, setReception }) => {
  const { name, doctor, date, complaint } = reception;
  const { store } = useContext(Context);

  const addList = async () => {
    const newList = await store.createList(name, doctor, date, complaint);
    if (newList) {
      setList(newList.data);
      console.log(newList.data)
    }
    setReception({
      name: '',
      doctor: '',
      date: '',
      complaint: ''
    });
  };

  const handleChange = (value, key) => {
    setReception({ ...reception, [key]: value });
  };

  return (
    <div className='input-form'>
      <div className="input-component">
        <div className='input-component__title'>
          <p>Имя:</p>
        </div>
        <input className='input-component__input' value={name} onChange={(e) => handleChange(e.target.value, 'name')} />
      </div>
      <div className="input-component">
        <div className='input-component__title'>
          <p>Доктор:</p>
        </div>
        <select className='input-component__input' value={doctor} onChange={(e) => handleChange(e.target.value, 'doctor')} >
          {
            DoctorsList.map((doctors) => {
              <option >{doctors.name}</option>
            })}
        </select>
      </div>
      <div className="input-component">
        <div className='input-component__title'>
          <p>Дата:</p>
        </div>
        <input className='input-component__input' type='date' value={date} onChange={(e) => handleChange(e.target.value, 'date')} />
      </div>
      <div className="input-component">
        <div className='input-component__title'>
          <p>Жалоба:</p>
        </div>
        <input className='input-component__input' value={complaint} onChange={(e) => handleChange(e.target.value, 'complaint')} />
      </div>
      <button className='input-component__button' onClick={() => addList()}>Добавить </button>
    </div>
  )
}

export default Inputs;