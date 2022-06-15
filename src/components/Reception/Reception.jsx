import { useState, useEffect, useContext } from 'react';
import { Context } from 'src/index';
import { Link } from 'react-router-dom';
import Append from '../Append/Append';
import List from '../List/List';
import headerLogo from 'src/logos/mainLogo.svg'
import 'src/components/Reception/style.scss';

const Reception = () => {
  const [reception, setReception] = useState({
    name: '',
    doctor: '',
    date: '',
    complaint: ''
  });
  const [list, setList] = useState([]);
  const { store } = useContext(Context);

  useEffect(() => {
    getAll();
  }, []);

  const getAll = async () => {
    const response = await store.getList();
    setList(response.data)
  };

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