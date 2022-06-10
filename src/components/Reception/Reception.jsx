import { useState, useEffect, useContext } from 'react';
import { Context } from 'src/index';
import { Link } from 'react-router-dom';
import Inputs from '../Reception components/Inputs/Inputs';
import List from '../Reception components/List/List';
import ReceptionService from 'src/services/ReceptionService';
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
  const { store } = useContext(Context);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const response = await ReceptionService.getList();
    setList(response.data.data)
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
    setReception({...reception, [type]: value})
  }

  return (
    <div className='reception-page'>
      <div className='reception-header'>
        <img className='reception-header__logo' src={headerLogo} alt='' />
        <div className='reception-header__text'><p>Приемы</p></div>
        <div className='reception-header__logout-button'>
          <button
            className='logout-button'
            onClick={() => store.logout()}
          >
            <Link to='/login'>Выход</Link>
          </button>
        </div>
      </div>
      <div ></div>
      <Inputs
        list={list}
        setList={setList}
        reception={reception}
        setReception={setReception}
      />
      <List
        list={list}
        setList={setList}
      />
    </div>
  );
};

export default Reception;