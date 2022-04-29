import { useState } from 'react';
import { Link } from 'react-router-dom';
import headerLogo from '../logos/mainLogo.svg';
import bodyLogo from '../logos/Buildings.svg';
import './registration.scss'

const Registration = () => {
  const [user, setUser] = useState({
    login: '',
    password: '',
    passwordRepeat: ''
  });
  const verify = (user) => {
    const rule = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,16}$/;
      if (!(user.login.length > 5)) {
      alert(`Длина логина должна быть не менее 6 символов!`);
    } else if (!(rule.test(user.password))) {
      alert(`Длина пароля должна быть не менее 6 символов, обязательно содежать латинские буквы и содержать хотя-бы одну цифру!`);
    } else if (!(user.passwordRepeat === user.password)) {
      alert(`Пароль или его повтор неверен! Пожалуйста, проверьте свои введенные данные!`);
    } else {
      alert('Вы успешно зарегистрировались!');
    }
  };

  const handleChange = (value, type) => {
    setUser({...user, [type]: value});
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
          <h1 className='form-block__main-name'>Регистрация</h1>
          <div className='form-block__inputs'>
            <div className='form-block__name'><p>Логин:</p></div>
            <input
              className='form-block__login'
              name='login'
              type='text'
              placeholder='Логин'
              value={user.login}
              onChange={(e) => handleChange(e.target.value, 'login')}
            />
            <div className='form-block__name'><p>Пароль:</p></div>
            <input
              className='form-block__password'
              type='password'
              placeholder='Пароль'
              value={user.password}
              onChange={(e) => handleChange(e.target.value, 'password')}
            />
            <div className='form-block__name'><p>Повторите пароль:</p></div>
            <input
              className='form-block__password-repeat'
              type='password'
              placeholder='Повторите пароль'
              value={user.passwordRepeat}
              onChange={(e) => handleChange(e.target.value, 'passwordRepeat')}
            />
          </div>
          <div className='form-block__redirect'>
            <button
              className='form-block__registration'
              onClick={() => verify(user)}
            >
              Зарегистрироваться
            </button>
            <Link to='/login' className='form-block__authorization'>Авторизоваться</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;