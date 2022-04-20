import { useState, useContext } from "react";

const Registration = ({renderRegistration, isRegistr, setRegistrated}) => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('');
    const { store } = useContext(Context);
    const passwordVerify = (login, password, passwordRepeat) => {
        let registr = /^(?=.*[0-9])(?=.*[a-zA-Z])[a-zA-Z0-9]{6,16}$/;
        if(registr.rule(password) && login.length > 5 && passwordRepeat === password) {
            store.registraion(login, password)
        }else{
            alert(`Длина логина должна быть не менее 6 символов! Длина пароля должна быть не менее 6 символов, обязательно содежать латинские буквы 
             и содержать хотя-бы одну цифру!`)
        }
    }
    return(
        <div className='registrForm'>
            <Header isRegistr={isRegistr} />
            <div className='mainRegistrForm'>
                <div className='loginForm'>
                    <h1 className='loginHeader'>Регистрация</h1>
                    <div className='loginInput'>
                        <p>Логин</p>
                        <input type='text' placeholder='Логин' onChange={(e) => setLogin(e.target.value)} />
                        <p>Пароль</p>
                        <input type='password' placeholder='Пароль' onChange={(e) => setPassword(e.target.value)} />
                        <p>Повторите пароль</p>
                        <input type='password' placeholder="Повторите пароль" onChange={(e) => setPasswordRepeat(e.target.value)} />
                        </div>
                        <div className="registrButtons">
                            <button className='registrLink' onClick={() => passwordVerify(login, password, passwordRepeat)}>Зарегистрироваться</button>
                            <button className='signLink' onClick={() => setRegistrated}>Авторизоваться</button>
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Registration