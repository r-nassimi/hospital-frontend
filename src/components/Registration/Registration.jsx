import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "src";
import Snackbars from "src/Snackbars/Snackbars";
import { validationObject } from "src/helper/helper-validate";
import logo from "src/logos/mainLogo.svg";
import icon from "src/logos/buildings.svg";
import "./style.scss";

const Registration = () => {
  const [user, setUser] = useState({
    login: "",
    password: "",
    passwordRepeat: ""
  });
  const { login, password, passwordRepeat } = user;
  const [snackText, setSnackText] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const { store } = useContext(Context); 
  const navigate = useNavigate();

  const openSnackbar = (message) => {
    setSnackOpen(true);
    setSnackText(message);
  };

  const checkData = async () => {
    try {
      if (!validationObject(login)) {
        openSnackbar("Логин должен содержать не менее 6 символов!");
        return;
      }
      if (!validationObject(password)) {
        openSnackbar("Длина пароля должна быть не менее 6 символов, обязательно содежать латинские буквы и содержать хотя-бы одну цифру!");
        return;
      }
      if (passwordRepeat !== password) {
        openSnackbar("Пароль или его повтор неверен! Пожалуйста, проверьте свои введенные данные!");
        return;
      }
      await store.registration(login, password);
      navigate("/reception");
    } catch (e) {
      openSnackbar(`Произошла ошибка во время регистрации пользователя`)
    }
  };

  const handleChange = (value, type) => {
    setUser({ ...user, [type]: value });
  };

  return (
    <div className="registration">
      <div className="registration__header">
        <Snackbars
          snackText={snackText}
          snackOpen={snackOpen}
          setSnackOpen={setSnackOpen}
        />
        <img className="registration__header__logo" src={logo} alt="" />
        <div className="registration__header__title">
          <p>Зарегистрироваться в системе</p>
        </div>
      </div>
      <div className="registration__wrapper">
        <img className="registration__wrapper__icon" src={icon} alt="" />
        <div className="registration__wrapper__form">
          <h1 className="registration__wrapper__form__title">Регистрация</h1>
          <div className="registration__wrapper__form__label">Логин:</div>
          <input
            className="registration__wrapper__form__field"
            name="login"
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => handleChange(e.target.value, "login")}
          />
          <div className="registration__wrapper__form__label"><p>Пароль:</p></div>
          <input
            className="registration__wrapper__form__field"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => handleChange(e.target.value, "password")}
          />
          <div className="registration__wrapper__form__label">Повторите пароль:</div>
          <input
            className="registration__wrapper__form__field"
            type="password"
            placeholder="Повторите пароль"
            value={passwordRepeat}
            onChange={(e) => handleChange(e.target.value, "passwordRepeat")}
          />
            <button
              className="registration__wrapper__form__registrate"
              type="button"
              onClick={checkData}
            >
              Зарегистрироваться
            </button>
          <Link to="/login"
            className="registration__wrapper__form__authorizate"
          >
            Авторизоваться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Registration;