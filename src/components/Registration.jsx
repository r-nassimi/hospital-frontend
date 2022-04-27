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
      rule.test(password)  &&
      passwordRepeat === password
    ) {
      console.log('registrate sucessful');
    } else if(!(login.length > 5)){
      alert(`Длина логина должна быть не менее 6 символов!`);
    } else if(!(rule.test(password))){
      alert(`Длина пароля должна быть не менее 6 символов, обязательно содежать латинские буквы и содержать хотя-бы одну цифру!`);
    } else if (!(passwordRepeat === password)) {
      alert(`Пароль или его повтор неверен! Пожалуйста, проверьте свои введенные данные!`);
    };
  };

  return (
    <div className='registrationForm'>
      <div className='registrationHeader'>
        <div className='headerLogo'>
          <img className='logoHeader' src={headerLogo} />
        </div>
        <div className='headerText'>
          <p>Зарегистрироваться в системе</p>
        </div>
      </div>
      <div className='registrationBody'>
      <div className = 'bodyLogo'>
        <img className = 'logoBody' src={bodyLogo} />
      </div>
      <div className='registrationField'>
        <h1 className='loginHeader'>Регистрация</h1>
        <div className='loginInputs'>
          <div className='fieldContent'><p>Логин:</p></div>
          <input
            className='loginInput'
            type='text'
            placeholder='Логин'
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <div className='fieldContent'><p>Пароль:</p></div>
          <input
            className='passwordInput'
            type='password'
            placeholder='Пароль'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className='fieldContent'><p>Повторите пароль:</p></div>
          <input
            className='passwordRepeatInput'
            type='password'
            placeholder='Повторите пароль'
            value={passwordRepeat}
            onChange={(e) => setPasswordRepeat(e.target.value)}
          />
        </div>
        <div className='registrationButtons'>
          <button
            className='registrationLink'
            onClick={() => passwordVerify(login, password, passwordRepeat)}
          >
            Зарегистрироваться
          </button>
          <button className='signLink' onClick={() => setRegistrated}>
            Авторизоваться
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
