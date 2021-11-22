import './Login.css';
import Form from '../Form/Form';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/logo_header.svg';

function Login(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('Обязательное поле');
  const [errorPassword, setErrorPassword] = useState('Обязательное поле');
  const [enableButton, setEnableButton] = useState(false);

  function emailChange(e) {
    setEmail(e.target.value);
    validateEmail(e.target);
  }

  function passwordChange(e) {
    setPassword(e.target.value);
    validatePassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(password, email);
  }

  function validateEmail(email) {
    let errorLabel = '';
    if (email.value.length < 1)
      errorLabel = 'Обязательное поле';
    else if (!email.checkValidity())
      errorLabel = 'Формат не соответствует';
    else
      errorLabel = '';
    checkedValidation( errorLabel, errorPassword);
    setErrorEmail(errorLabel);
  }

  function validatePassword(password) {
    let errorLabel = '';
    if (password.length < 1)
      errorLabel = 'Обязательное поле';
    else
      errorLabel = '';
    checkedValidation(errorEmail,errorLabel);
    setErrorPassword(errorLabel)
  }

  function checkedValidation( errorEmail, errorPassword) {
    if ( errorEmail === '' &&  errorPassword === ''){
      setEnableButton(true);
    }
    else
      setEnableButton(false);
  }


  return (
    <div className="login">
      <img className="login__logo" alt="Логотип" src={logo} />
      <Form title="Рады видеть" buttonText="Войти" handleSubmit={handleSubmit} disabledButton={enableButton}>
        <p className="login__label">E-mail</p>
        <input type="email" className="login__text" name="email"
          placeholder="Email" value={email} onChange={emailChange}
        />
        <span className="login__error_input">{errorEmail}</span>
        <p className="login__label">Пароль</p>
        <input type="password" className="login__text" name="password"
          placeholder="Пароль" value={password} onChange={passwordChange}
        />
        <span className="login__error_input">{errorPassword}</span>
      </Form>
      <p className="login__come" >Еще не зарегистрированы?<NavLink className="login__link" to="/sign-up">Зарегистрироваться</NavLink></p>
    
    </div>
  );
}

export default Login;
