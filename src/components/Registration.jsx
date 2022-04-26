import { useState } from "react";

const Registration = ({ isRegistr, setRegistrated }) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const passwordVerify = (login, password, passwordRepeat) => {
    const registr = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,16}$/;
    if (
      registr.test(password) &&
      login.length > 5 &&
      passwordRepeat === password
    ) {
      console.log("registrated");
    } else {
      alert(`Длина логина должна быть не менее 6 символов! Длина пароля должна быть не менее 6 символов, обязательно содежать латинские буквы 
      и содержать хотя-бы одну цифру!`);
    }
    return (
      <div className="registrForm">
        <h1 className="logHeader">Регистрация</h1>
        <div className="logInputs">
          <p>Логин</p>
          <input
            classname="registrLogInput"
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <p>Пароль</p>
          <input
            className="registrPass"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p>Повторите пароль</p>
          <input
            className="registrRepeatPass"
            type="password"
            placeholder="Повторите пароль"
            value={passwordRepeat}
            onChange={(e) => setPasswordRepeat(e.target.value)}
          />
        </div>
        <div className="registrButtons">
          <button
            className="registrLink"
            onClick={() => passwordVerify(login, password, passwordRepeat)}
          >
            Зарегистрироваться
          </button>
          <button className="signLink" onClick={() => setRegistrated}>
            Авторизоваться
          </button>
        </div>
      </div>
    );
  };
};

export default Registration;

