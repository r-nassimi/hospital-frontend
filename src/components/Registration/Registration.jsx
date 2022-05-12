import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
  const { store } = useContext(Context);
  const navigate = useNavigate();
  const verifyValidationForm = async (user) => {
    if (login.length < 6) {
      return alert(`Длина логина должна быть не менее 6 символов!`);
    }
    if (!validationPassword(password)) {
      return alert(`Длина пароля должна быть не менее 6 символов, обязательно содежать латинские буквы и содержать хотя-бы одну цифру!`);
    }
    if (passwordRepeat !== password) {
      return alert(`Пароль или его повтор неверен! Пожалуйста, проверьте свои введенные данные!`);
    }
    await store.registration(login, password);
  };

  const handleChange = (value, type) => {
    setUser({ ...user, [type]: value });
  };

  return (
    <div className='registration__page'>
      <div className='registration-header'>
        <img className='registration-header__logo' src={headerLogo} alt='' />
        <div className='registration-header__text'>
          <p>Зарегистрироваться в системе</p>
        </div>
      </div>
      <div className='registration-block'>
        <img className='registration-block__logo' src={bodyLogo} alt='' />
        <div className='registration-block__form'>
          <h1 className='registration-form__main-name'>Регистрация</h1>
          <div className='registration-form__inputs'>
            <div className='registration-form__name'><p>Логин:</p></div>
            <input
              className='registration-form__login'
              name='login'
              type='text'
              placeholder='Логин'
              value={login}
              onChange={(e) => handleChange(e.target.value, 'login')}
            />
            <div className='registration-form__name'><p>Пароль:</p></div>
            <input
              className='registration-form__password'
              type='password'
              placeholder='Пароль'
              value={password}
              onChange={(e) => handleChange(e.target.value, 'password')}
            />
            <div className='registration-form__name'><p>Повторите пароль:</p></div>
            <input
              className='registration-form__password-repeat'
              type='password'
              placeholder='Повторите пароль'
              value={passwordRepeat}
              onChange={(e) => handleChange(e.target.value, 'passwordRepeat')}
            />
          </div>
          <div className='registration-form__redirect'>
            <button
              className='registration-form__registration-button'
              onClick={() => verifyValidationForm(login, password)}
            >
              Зарегистрироваться
            </button>
            <Link to='/login' className='registration-form__authorization-link' onClick={() => store.changeMethod()}>Авторизоваться</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;