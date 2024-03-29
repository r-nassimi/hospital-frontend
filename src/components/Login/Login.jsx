
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "src";
import Snackbars from "src/Snackbars/Snackbars";
import { validationObject } from "src/helper/helper-validate";
import logo from "src/logos/mainLogo.svg";
import icon from "src/logos/buildings.svg";
import "./style.scss";

const Login = () => {
  const [user, setUser] = useState({
    login: "",
    password: "",
  });
  const { login, password } = user;
  const navigate = useNavigate();
  const [snackText, setSnackText] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const { store } = useContext(Context);

  const openSnackbar = (text) => {
    setSnackOpen(true);
    setSnackText(text);
  };

  const checkData = async () => {
    try {
      if (!validationObject(login)) {
        openSnackbar("Логин некорректен!");
        return;
      }
      if (!validationObject(password)) {
        openSnackbar("Пароль некорректен!");
        return;
      }
      await store.login(login, password);
      navigate("/reception");
    } catch (e) {
      openSnackbar(`Произошла ошибка во время авторизации пользователя`);
    };
  };

  const handleChange = (value, type) => {
    setUser({ ...user, [type]: value });
  };

  return (
    <div className="login">
      <div className="login__header">
        <Snackbars
          snackText={snackText}
          snackOpen={snackOpen}
          setSnackOpen={setSnackOpen}
        />
        <img
          className="login__header__logo"
          src={logo} alt=""
        />
        <div className="login__header__title">
          <p>
            Войти в систему
          </p>
        </div>
      </div>
      <div className="login__wrapper">
        <img
          className="login__wrapper__icon"
          src={icon} alt=""
        />
        <div className="login__wrapper__form">
          <h1 className="login__wrapper__form__title">
            Войти в систему
            </h1>
          <div className="login__wrapper__form__label">
            <p>Логин:</p>
          </div>
          <input
            className="login__wrapper__form__field"
            type="text"
            placeholder="Логин"
            value={login}
            onChange={(e) => handleChange(e.target.value, "login")}
          />
          <div className="login__wrapper__form__label">
            <p>Пароль:</p>
          </div>
          <input
            className="login__wrapper__form__field"
            type="password"
            placeholder="Пароль"
            value={password}
            onChange={(e) => handleChange(e.target.value, "password")}
          />
          <button
            className="login__wrapper__form__authorization"
            type="button"
            onClick={checkData}
          >
            Войти
          </button>
          <Link
            to="/registration"
            className="login__wrapper__form__registration"
          >
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;