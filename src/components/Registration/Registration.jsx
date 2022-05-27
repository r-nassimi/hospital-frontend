import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from 'src/index';
import Snackbars from 'src/Snackbars/Snackbars';
import { validationString } from 'src/helper/helper-validate';
import headerLogo from 'src/logos/mainLogo.svg';
import bodyLogo from 'src/logos/buildings.svg';
import './style.scss';

const Registration = () => {
  const [user, setUser] = useState({
    login: '',
    password: '',
    passwordRepeat: ''
  });
  const { login, password, passwordRepeat } = user;
  const [snackText, setSnackText] = useState('');
  const [snackOpen, setSnackOpen] = useState(false);
  const { store } = useContext(Context);

  const openSnackbar = (message) => {
    setSnackOpen(true);
    setSnackText(message);
  };

  const verifyValidationForm = async (user) => {
    if (!validationString(login)) {
      openSnackbar('Логин должен содержать не менее 6 символов!');
      return;
    }
    if (!validationString(password)) {
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
    <div className='registration-page'>
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
        <div className='form-block'>
          <h1 className='form-block__main-name'>Регистрация</h1>
          <div className='inputs-block'>
            <div className='inputs-block__name'><p>Логин:</p></div>
            <input
              className='inputs-block__login'
              name='login'
              type='text'
              placeholder='Логин'
              value={login}
              onChange={(e) => handleChange(e.target.value, 'login')}
            />
            <div className='inputs-block__name'><p>Пароль:</p></div>
            <input
              className='inputs-block__password'
              type='password'
              placeholder='Пароль'
              value={password}
              onChange={(e) => handleChange(e.target.value, 'password')}
            />
            <div className='inputs-block__name'><p>Повторите пароль:</p></div>
            <input
              className='inputs-block__password-repeat'
              type='password'
              placeholder='Повторите пароль'
              value={passwordRepeat}
              onChange={(e) => handleChange(e.target.value, 'passwordRepeat')}
            />
          </div>
          <div className='redirect-block'>
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