import { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from 'src/index';
import { validationPassword } from 'src/helper/helper-validate';
import 'src/components/Login/style.scss';
import headerLogo from 'src/logos/mainLogo.svg';
import bodyLogo from 'src/logos/buildings.svg';


const Login = () => {
  const [user, setUser] = useState({
    login: '',
    password: '',
  });
  const { login, password } = user;
  const { store } = useContext(Context);
  const navigate = useNavigate();
  const verifyValidationForm = async (user) => {
    if (login.length < 6) {
      return alert(`Логин некорректен!`);
    }
    if (!validationPassword(password)) {
      return alert(`Пароль некорректен!`);
    }
    return await store.login(login, password);
  };

  const handleChange = (value, type) => {
    setUser({ ...user, [type]: value });
  };

  return (
    <div className='login__page'>
      <div className='login-header'>
        <img className='login-header__logo' src={headerLogo} alt='' />
        <div className='login-header__text'>
          <p>Войти в систему</p>
        </div>
      </div>
      <div className='login-block'>
        <img className='login-block__logo' src={bodyLogo} alt='' />
        <div className='login-block__form'>
          <h1 className='login-block__main-name'>Войти в систему</h1>
          <div className='login-block__inputs'>
            <div className='login-block__name'><p>Логин:</p></div>
            <input
              className='login-block__login'
              type='text'
              placeholder='Логин'
              value={login}
              onChange={(e) => handleChange(e.target.value, 'login')}
            />
            <div className='login-block__name'><p>Пароль:</p></div>
            <input
              className='login-block__password'
              type='password'
              placeholder='Пароль'
              value={password}
              onChange={(e) => handleChange(e.target.value, 'password')}
            />
          </div>
          <div className='login-block__redirect'>
            <button
              className='login-block__authorizate-button'
              onClick={() => verifyValidationForm(login, password)}
            >
              Войти
            </button>
            <Link to='/registration'
              className='login-block__registrate-link'
              onClick={() => store.changeMethod()}>
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;