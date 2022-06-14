import { useState, useEffect, useContext } from 'react';
import { Context } from 'src/index';
import { Link } from 'react-router-dom';
import Append from '../Reception components/Append/Append';
import List from '../Reception components/List/List';
import ReceptionService from 'src/services/ReceptionService';
import headerLogo from 'src/logos/mainLogo.svg'
import 'src/components/Reception/style.scss';

const Reception = () => {
  const [reception, setReception] = useState({
    name: '',
    doctor: '',
    date: '',
    complaint: ''
  });
  const { name, doctor, date, complaint } = reception;
  const [list, setList] = useState([]);
  const { store } = useContext(Context);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const response = await ReceptionService.getList();
    setList(response.data)
  };

  //other component
  // const sortReception = [...list].sort((a,b) => {
  //   if(!sortField) {
  //     return 0;
  //   }
  //   if(sortWay === 'asc') {
  //     if(sortField) {
  //       if(a[sortField] === b[sortField]) return 0;
  //       return a[sortField] > b[sortField] ? 1 : -1  
  //     }
  //   } else {
  //     if(a[sortField] === b[sortField]) return 0;
  //     return a[sortValue] > b[sortValue] ? 1: -1
  //   }
  // })

  const handleChange = (value, type) => {
    setReception({ ...reception, [type]: value })
  }

  return (
    <div className='reception'>
      <div className='reception__header'>
        <img className='reception__header__logo' src={headerLogo} alt='' />
        <div className='reception__header__title'>Приемы</div>
        <button
          className='reception__header__logout'
          onClick={() => store.logout()}
        >
          <Link to='/login'>Выход</Link>
        </button>
      </div>
      <div className='reception__append'>
        <Append
          list={list}
          setList={setList}
          reception={reception}
          setReception={setReception}
        />
      </div>
      <div className='reception__table'>
        <List
          list={list}
          setList={setList}
        />
      </div>

    </div>
  );
};

export default Reception;