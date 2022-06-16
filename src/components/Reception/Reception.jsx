import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router';
import { Context } from 'src/index';
import { API_URL } from "src/constants";
import ReceptionService from "src/services/ReceptionService";
import axios from 'axios';
import Snackbars from 'src/Snackbars/Snackbars';
import headerLogo from 'src/logos/mainLogo.svg'
import 'src/components/Reception/Reception';


const Reception = () => {
  const [reception, setReception] = useState({
    name: '',
    doctor: '',
    date: '',
    complaint: ''
  });
  const { name, doctor, date, complaint } = reception;
  const [list, setList] = useState([]);
  const [snackText, setSnackText] = useState('');
  const [snackOpen, setSnackOpen] = useState(false);
  const navigate = useNavigate();
  const buildList = (value, type) => {
    const newList = { ...reception };
    newList[type] = value;
    setReception(newList);
  };

  useEffect(async () => {
    if (!localStorage.getItem('token')) navigate('/login');
    const response = await ReceptionService.getList();
    setList(response.data);
  }, []);

  const refreshList = async () => {
    await axios.get(`${API_URL}/getList/user_id=${localStorage.getItem('user_id')}`).then(res => {
      setList(res.data);
    });
  };

  const addList = async () => {
    if (name && doctor && date && complaint) {
      await axios.post((`${API_URL}/createList`), {
        user_id: localStorage.getItem('user_id'),
        name: name,
        doctor: doctor,
        date: date,
        complaint: complaint
      }).then(res => {
        const newList = [...list];
        newList.push(res.data);
        setList(newList);
      });
      setReception({
        name: '',
        doctor: '',
        date: '',
        complaint: '',
      });
    } else {
      setSnackOpen(true);
    }
  }

  return (
    <div className='reception-page'>
      <div className='reception-header'>
        <img className='reception-header__logo' src={headerLogo} alt='' />
        <div className='reception-header__text'><p>Приемы</p></div>
        <div className='reception-header__logout-button'>
          <button
            className='logout-button'
          >Выход
          </button>
        </div>
      </div>
      <div className='reception-inputs'>
        <div className='input-name'>Имя: </div>
        <input type='name' name='name' value={name} onChange={(e) => buildList(e.target.value, 'name')} />
        <div className='input-name'>Доктор: </div>
        <select type='doctor' name='doctor' value={doctor} onChange={(e) => buildList(e.target.value, 'doctor')} />
        <div className='input-name'>Дата: </div>
        <input type='date' name='date' value={date} onChange={(e) => buildList(e.target.value, 'date')} />
        <div className='input-name'>Жалобы: </div>
        <input type='complaint' name='complaint' value={complaint} onChange={(e) => buildList(e.target.value, 'complaint')} />
        <button className='input-create'>Добавить</button>
      </div>
    </div>
  );
};

export default Reception;