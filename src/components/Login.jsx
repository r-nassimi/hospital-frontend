import { useState } from 'react';
import headerLogo from '../logos/mainLogo.svg'
import bodyLogo from '../logos/Buildings.svg'

const Login = ({ isRegistr, setRegistrated }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const passwordVerify = (login, password) => {
    const registr = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,16}$/;
    if (registr.test(password) && login.length > 6) {
      console.log('login sucessful!')
    } else if (!(login.length > 6)){
        alert(`Логин некорректен!`)
    } else if (!(registr.test(password))){
      alert(`Пароль некорректен!`);
    }
  }
  return (
    <div className='main__page'>
      <div className='header'>
        <div className='header__logo'>
        <img className = 'logo__small' src={headerLogo} alt=''/>
        </div>
        <div className='header__text'><p>Войти в систему</p></div>
      </div>
      <div className='body'>
        <div className='body__logo'>
        <img className = 'logo__big' src={bodyLogo} alt=''/>
        </div>
        <div className='field'>
          <h1 className='field__name'>Войти в систему</h1>
          <div className='field__inputs'>
              <div className='input__name'>Логин: </div>
            <input
              className='input__login'
              type='text'
              placeholder='Логин:'
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
            <div className='input__name'><p>Пароль:</p></div>
            <input
              className='input__password'
              type='text'
              placeholder='Пароль: '
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="field__buttons">
              <button
                className="button__redirect"
                onClick={() => passwordVerify(login, password)}
              >
                Войти
              </button>
              <button className="link__redirect" onClick={() => setRegistrated}>
                Зарегистрироваться
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;