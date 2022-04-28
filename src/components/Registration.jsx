import { useState } from 'react';
import headerLogo from '../logos/mainLogo.svg';
import bodyLogo from '../logos/Buildings.svg';

const Registration = ({ isRegistr, setRegistrated }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeat, setPasswordRepeat] = useState('');
  const passwordVerify = (login, password, passwordRepeat) => {
    const rule = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,16}$/;
    if (
      login.length > 5 &&
      rule.test(password) &&
      passwordRepeat === password
    ) {
      console.log('registrate sucessful');
    } else if (!(login.length > 5)) {
      alert(`Длина логина должна быть не менее 6 символов!`);
    } else if (!(rule.test(password))) {
      alert(`Длина пароля должна быть не менее 6 символов, обязательно содежать латинские буквы и содержать хотя-бы одну цифру!`);
    } else if (!(passwordRepeat === password)) {
      alert(`Пароль или его повтор неверен! Пожалуйста, проверьте свои введенные данные!`);
    };
  };
  return (
    <div className='main__page'>
      <div className='header'>
        <div className='header__logo'>
          <img className='logo__small' src={headerLogo} alt='' />
        </div>
        <div className='header__text'>
          <p>Зарегистрироваться в системе</p>
        </div>
      </div>
      <div className='body'>
        <div className='body__logo'>
          <img className='logo__big' src={bodyLogo} alt='' />
        </div>
        <div className='field'>
          <h1 className='field__name'>Регистрация</h1>
          <div className='field__inputs'>
            <div className='input__name'><p>Логин:</p></div>
            <input
              className='input__login'
              type='text'
              placeholder='Логин'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <div className='input__name'><p>Пароль:</p></div>
            <input
              className='input__password'
              type='password'
              placeholder='Пароль'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className='input__name'><p>Повторите пароль:</p></div>
            <input
              className='input__password__repeat'
              type='password'
              placeholder='Повторите пароль'
              value={passwordRepeat}
              onChange={(e) => setPasswordRepeat(e.target.value)}
            />
          </div>
          <div className='field__buttons'>
            <button
              className='button__redirect'
              onClick={() => passwordVerify(login, password, passwordRepeat)}
            >
              Зарегистрироваться
            </button>
            <button className='link__redirect' onClick={() => setRegistrated}>
              Авторизоваться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
