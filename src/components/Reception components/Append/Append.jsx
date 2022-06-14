import { useContext } from "react";
import { Context } from "src/index";
import { DoctorsList } from "src/constants";
import 'src/components/Reception components/Append/style.scss'

const Append = ({ setList, reception, setReception }) => {
  const { name, doctor, date, complaint } = reception;
  const { store } = useContext(Context);

  const createList = async (e) => {
    e.preventDefault();
    const response = await store.createList(name, doctor, date, complaint);
    if (response.data) {
      setList(response.data);
    }
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
    <div className='append'>
      <div className='append__block'>
        <label>Имя</label>
        <input className='append__name' type='text' value={name} onChange={(e) => handleChange(e.target.value, 'name')} />
      </div>
      <div className='append__block'>
        <label>Доктор</label>
        <select className='append__doctor' type='text' value={doctor} onChange={(e) => handleChange(e.target.value, 'doctor')} >
          <option></option>
          {
            DoctorsList.map((doctor, index) =>
              <option value={doctor}>{doctor}</option>)
          }
        </select>
      </div>
      <div className='append__block'>
        <label>Дата</label>
        <input className='append__date' type='date' value={date} onChange={(e) => handleChange(e.target.value, 'date')} />
      </div>
      <div className='append__block'>
        <label>Жалоба</label>
        <input className='append__complaint' type='text' value={complaint} onChange={(e) => handleChange(e.target.value, 'complaint')} />
      </div>
      <div className='append__block'>
        <button className='append__create' type='submit' onClick={createList}>Добавить</button>
      </div>

    </div>
  )
}

export default Append;