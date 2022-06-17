import { useContext } from "react";
import { Context } from "src/index";
import { doctorsList } from "src/constants";
import './style.scss';

const Creator = ({ list, setList, reception, setReception }) => {
  const { name, doctor, date, complaint } = reception;
  const { store } = useContext(Context);

  const createAppoint = async (e) => {
    e.preventDefault();
    const response = await store.createList(name, doctor, date, complaint);
    const updatedList = [...list, response.data];
    setList(updatedList);
    setReception({
      name: '',
      doctor: '',
      date: '',
      complaint: ''
    });
  };

  const handleChange = (value, type) => {
    setReception({ ...reception, [type]: value })
  }

  return (
    <div className='creator'>
      <div className='creator__block'>
        <label for='name'>
          Имя
        </label>
        <input
          className='creator__block__input'
          type='text'
          value={name}
          id='name'
          onChange={(e) => handleChange(e.target.value, 'name')}
        />
      </div>
      <div className='creator__block'>
        <label for='doctor'>
          Доктор
        </label>
        <select
          className='creator__block__input'
          type='text'
          value={doctor}
          id='doctor'
          onChange={(e) => handleChange(e.target.value, 'doctor')}
        >
          <option></option>
          {
            doctorsList.map((doctor, index) =>
              <option value={doctor}>
                {doctor}
              </option>
            )
          }
        </select>
      </div>
      <div className='creator__block'>
        <label for='date'>
          Дата
        </label>
        <input
          className='creator__block__input'
          type='date'
          value={date}
          id='date'
          onChange={(e) => handleChange(e.target.value, 'date')}
        />
      </div>
      <div className='creator__block'>
        <label for='complaint'>
          Жалоба
        </label>
        <input
          className='creator__block__input'
          type='text'
          value={complaint}
          id='complaint'
          onChange={(e) => handleChange(e.target.value, 'complaint')}
        />
      </div>
      <div className='creator__block'>
        <button
          className='creator__block__add'
          type='submit'
          onClick={createAppoint}>
          Добавить
        </button>
      </div>
    </div>
  )
}

export default Creator;