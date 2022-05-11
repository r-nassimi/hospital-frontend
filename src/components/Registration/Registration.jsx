import { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from 'src/index';
import headerLogo from 'src/logos/mainLogo.svg'
import bodyLogo from 'src/logos/buildings.svg'
import 'src/components/Registration/registration.scss'

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
  const rule = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,16}$/;
  const verify = async (user) => {
    if (login.length < 6) {
      alert(`Длина логина должна быть не менее 6 символов!`);
    } else if (!(rule.test(password))) {
      alert(`Длина пароля должна быть не менее 6 символов, обязательно содежать латинские буквы и содержать хотя-бы одну цифру!`);
    } else if (passwordRepeat !== password) {
      alert(`Пароль или его повтор неверен! Пожалуйста, проверьте свои введенные данные!`);
    } else {
      await store.registration(login, password);
      navigate('/reception');
    };
  };

  const handleChange = (value, type) => {
    setUser({ ...user, [type]: value });
  };

  return (
    <div className='registration__page'>
      <div className='header-block'>
        <img className='header-block__logo' src={headerLogo} alt='' />
        <div className='header-block__text'>
          <p>Зарегистрироваться в системе</p>
        </div>
      </div>
      <div className='body-block'>
        <img className='body-block__logo' src={bodyLogo} alt='' />
        <div className='body-block__form'>
          <h1 className='registration-block__main-name'>Регистрация</h1>
          <div className='registration-block__inputs'>
            <div className='registration-block__name'><p>Логин:</p></div>
            <input
              className='registration-block__login'
              name='login'
              type='text'
              placeholder='Логин'
              value={login}
              onChange={(e) => handleChange(e.target.value, 'login')}
            />
            <div className='registration-block__name'><p>Пароль:</p></div>
            <input
              className='registration-block__password'
              type='password'
              placeholder='Пароль'
              value={password}
              onChange={(e) => handleChange(e.target.value, 'password')}
            />
            <div className='registration-block__name'><p>Повторите пароль:</p></div>
            <input
              className='registration-block__password-repeat'
              type='password'
              placeholder='Повторите пароль'
              value={passwordRepeat}
              onChange={(e) => handleChange(e.target.value, 'passwordRepeat')}
            />
          </div>
          <div className='registration-block__redirect'>
            <button
              className='registration-block__registration-button'
              onClick={() => verify(login, password)}
            >
              Зарегистрироваться
            </button>
            <Link to='/login' className='registration-block__authorization-link' onClick={() => store.changeMethod()}>Авторизоваться</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;