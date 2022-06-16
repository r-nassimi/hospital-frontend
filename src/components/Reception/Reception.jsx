import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from 'src/index';
import Creator from 'src/components/Creator/Creator';
import List from 'src/components/List/List';
import headerLogo from 'src/logos/mainLogo.svg'
import './style.scss';

const Reception = () => {
  const [reception, setReception] = useState({
    name: '',
    doctor: '',
    date: '',
    complaint: ''
  });
  const [list, setList] = useState([]);
  const navigate = useNavigate();
  const { store } = useContext(Context);

  useEffect(() => {
    console.log(localStorage.getItem('accessToken'), 11);
    getAll();
  }, []);

  const getAll = async () => {
    const response = await store.getList();
    if(response.data) setList(response.data);

    return;
  };

  const logout = async () => {
    await store.logout();
    navigate('/login')    
    return;
  }

  return (
    <div className='reception'>
      <div className='reception__header'>
        <img className='reception__header__logo' src={headerLogo} alt='' />
        <div className='reception__header__title'>Приемы</div>
        <div className='reception__header__button'>
          <button
            className='reception__header__button__logout'
            onClick={() => logout()}
          >
            Выход
          </button>
        </div>
      </div>
      <div className='reception__append'>
        <Creator
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