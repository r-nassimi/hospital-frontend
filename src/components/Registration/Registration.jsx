import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { Context } from 'src/index';
import { validationPassword } from 'src/helper/helper-validate';
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

  const Alert = React.forwardRef(function warning(props, ref) {
    return <MuiAlert elevation={5} ref={ref} {...props} />
  });

  const handleClose = (value, type) => {
    setSnackOpen(false);
  };

  const verifyValidationForm = async (user) => {
    if (login.length < 6) {
      setSnackText('Логин должен содержать не менее 6 символов!');
      setSnackOpen(true);
    }
    if (!validationPassword(password)) {
      setSnackText('Длина пароля должна быть не менее 6 символов, обязательно содежать латинские буквы и содержать хотя-бы одну цифру!');
      setSnackOpen(true);
    }
    if (passwordRepeat !== password) {
      setSnackText('Пароль или его повтор неверен! Пожалуйста, проверьте свои введенные данные!');
      setSnackOpen(true);
    }
    await store.registration(login, password);
  };

  const handleChange = (value, type) => {
    setUser({ ...user, [type]: value });
  };

  return (
    <div className='registration__page'>
      <div className='registration-header'>
      <Snackbar
        open={snackOpen}
        onClose={handleClose}
        >
          <Alert severity='error'>{snackText}</Alert>
        </Snackbar>
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
              onChange={(e) => handleChange(e.target.value.replace(/\s/g, ""), 'login')}
            />
            <div className='input-block__name'><p>Пароль:</p></div>
            <input
              className='input-block__password'
              type='password'
              placeholder='Пароль'
              value={password}
              onChange={(e) => handleChange(e.target.value.replace(/\s/g, ""), 'password')}
            />
            <div className='input-block__name'><p>Повторите пароль:</p></div>
            <input
              className='input-block__password-repeat'
              type='password'
              placeholder='Повторите пароль'
              value={passwordRepeat}
              onChange={(e) => handleChange(e.target.value.replace(/\s/g, ""), 'passwordRepeat')}
            />
          </div>
          <div className='form-block__redirect'>
            <button
              className='redirect-block__registration'
              onClick={() => verifyValidationForm(login, password)}
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