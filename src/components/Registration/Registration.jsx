import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from 'src/index';
import { validationLogin, validationPassword } from 'src/helper/helper-validate';
import Snackbars from 'src/Snackbars/Snackbars';
import 'src/components/Registration/style.scss';
import headerLogo from 'src/logos/mainLogo.svg';
import bodyLogo from 'src/logos/buildings.svg';

const Registration = () => {
  const [user, setUser] = useState(
    {
      login: '',
      password: '',
      passwordRepeat: ''
    }
  );
  const { login, password, passwordRepeat } = user;
  const [snackText, setSnackText] = useState('');
  const [snackOpen, setSnackOpen] = useState(false);
  const { store } = useContext(Context);
  const openSnackbar = (message) => {
    setSnackOpen(true);
    setSnackText(message);
  }

  const verifyValidationForm = async (user) => {
    if (!validationLogin(login) && login.length < 6) {
      openSnackbar('Логин должен содержать не менее 6 символов!');
      return;
    }
    if (!validationPassword(password) && password.length < 6) {
      openSnackbar('Длина пароля должна быть не менее 6 символов, обязательно содежать латинские буквы и содержать хотя-бы одну цифру!');
      return;
    }
    if (passwordRepeat !== password) {
      openSnackbar('Пароль или его повтор неверен! Пожалуйста, проверьте свои введенные данные!');
      return;
    }
    await store.registration(login, password);
  };

  const handleChange = (value, type) => {
    setUser({ ...user, [type]: value });
  };

  return (
    <div className='registration__page'>
      <div className='registration-header'>
        <Snackbars
          snackText={snackText}
          snackOpen={snackOpen}
          setSnackOpen={setSnackOpen}
        />
        <img className='registration-header__logo' src={headerLogo} alt='' />
        <div className='registration-header__text'>
          <p>Зарегистрироваться в системе</p>
        </div>
      </div>
      <div className='registration-block'>
        <img className='registration-block__logo' src={bodyLogo} alt='' />
        <div className='registration-block__form'>
          <h1 className='form-block__main-name'>Регистрация</h1>
          <div className='form-block__inputs'>
            <div className='input-block__name'><p>Логин:</p></div>
            <input
              className='input-block__login'
              name='login'
              type='text'
              placeholder='Логин'
              value={login}
              onChange={(e) => handleChange(e.target.value, 'login')}
            />
            <div className='input-block__name'><p>Пароль:</p></div>
            <input
              className='input-block__password'
              type='password'
              placeholder='Пароль'
              value={password}
              onChange={(e) => handleChange(e.target.value, 'password')}
            />
            <div className='input-block__name'><p>Повторите пароль:</p></div>
            <input
              className='input-block__password-repeat'
              type='password'
              placeholder='Повторите пароль'
              value={passwordRepeat}
              onChange={(e) => handleChange(e.target.value, 'passwordRepeat')}
            />
          </div>
          <div className='form-block__redirect'>
            <button
              className='redirect-block__registration'
              onClick={() => verifyValidationForm(user)}
            >
              Зарегистрироваться
            </button>
            <Link to='/login'
              className='redirect-block__authorization'
            >
              Авторизоваться
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;