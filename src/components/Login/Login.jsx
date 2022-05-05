import { useState } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../../logos/mainLogo.svg'
import bodyLogo from '../../logos/buildings.svg'
import './login.scss'

const Login = () => {
  const [user, setUser] = useState({
    login: '',
    password: '',
  });
  const verify = (user) => {
    const rule = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,16}$/;
    if (!(user.login.length > 5)) {
      alert(`Логин некорректен!`);
    } else if (!(rule.test(user.password))) {
      alert(`Пароль некорректен!`);
    } else {
      alert('Вы успешно авторизовались!');
    }
  }

  const handleChange = (value, type) => {
    setUser({ ...user, [type]: value });
  };

  return (
    <div className='registration__page'>
      <div className='header-block'>
        <img className='header-block__logo' src={headerLogo} alt='' />
        <div className='header-block__text'>
          <p>Войти в систему</p>
        </div>
      </div>
      <div className='body-block'>
        <img className='body-block__logo' src={bodyLogo} alt='' />
        <div className='body-block__form'>
          <h1 className='signup-block__main-name'>Войти в систему</h1>
          <div className='signup-block__inputs'>
            <div className='signup-block__name'><p>Логин:</p></div>
            <input
              className='signup-block__login'
              type='text'
              placeholder='Логин'
              value={user.login}
              onChange={(e) => handleChange(e.target.value, 'login')}
            />
            <div className='signup-block__name'><p>Пароль:</p></div>
            <input
              className='signup-block__password'
              type='password'
              placeholder='Пароль'
              value={user.password}
              onChange={(e) => handleChange(e.target.value, 'password')}
            />
          </div>
          <div className='signup-block__redirect'>
            <button
              className='signup-block__button_authorizate'
              onClick={() => verify(user)}
            >
              Войти
            </button>
            <Link to='/registration' className='signup-block__link_registrate'>Зарегистрироваться</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;