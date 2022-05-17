import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
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
      setSnackText('Логин некорректен!');
      setSnackOpen(true);
    }
    if (!validationPassword(password)) {
      setSnackText('Пароль некорректен!');
      setSnackOpen(true);
    }
    await store.login(login, password);
  };

  const handleChange = (value, type) => {
    setUser({ ...user, [type]: value });
  };

  return (
    <div className='login__page'>
      <div className='login-header'>
        <Snackbar
          open={snackOpen}
          onClose={handleClose}
        >
          <Alert severity='error'>{snackText}</Alert>
        </Snackbar>
        <img className='login-header__logo' src={headerLogo} alt='' />
        <div className='login-header__text'>
          <p>Войти в систему</p>
        </div>
      </div>
      <div className='login-block'>
        <img className='login-block__logo' src={bodyLogo} alt='' />
        <div className='login-block__form'>
          <h1 className='form-block__main-name'>Войти в систему</h1>
          <div className='form-block__inputs'>
            <div className='inputs-block__name'><p>Логин:</p></div>
            <input
              className='input-block__login'
              type='text'
              placeholder='Логин'
              value={login}
              onChange={(e) => handleChange(e.target.value.replace(/\s/g, ""), 'login')}
            />
            <div className='inputs-block__name'><p>Пароль:</p></div>
            <input
              className='inputs-block__password'
              type='password'
              placeholder='Пароль'
              value={password}
              onChange={(e) => handleChange(e.target.value.replace(/\s/g, ""), 'password')}
            />
          </div>
          <div className='form-block__redirect'>
            <button
              className='redirect-block__authorizate'
              onClick={() => verifyValidationForm(login, password)}
            >
              Войти
            </button>
            <Link to='/registration'
              className='redirect-block__registrate'
            >
              Зарегистрироваться
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;