import './Register.css';
import Form from '../Form/Form';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/logo_header.svg';
const isEmail = require('validator/lib/isEmail');

function Register(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorName, setErrorName] = useState('Обязательное поле');
  const [errorEmail, setErrorEmail] = useState('Обязательное поле');
  const [errorPassword, setErrorPassword] = useState('Обязательное поле');
  const [enableButton, setEnableButton] = useState(false);


  function nameChange(e) {
    setName(e.target.value);
    validateName(e.target.value);
  }
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
    props.handleSubmit(password, email, name);
  }

  function validateName(name) {
    let errorLabel = '';
    if (name.length < 1)
      errorLabel = 'Обязательное поле';
    else if (name.length < 2 || name.length > 30)
      errorLabel = 'Имя должно быть от 2 до 30 символов';
    checkedValidation(errorLabel, errorEmail, errorPassword);
    setErrorName(errorLabel);
  }

  function validateEmail(email) {
    let errorLabel = '';
    if (email.value.length < 1)
      errorLabel = 'Обязательное поле';
    else if (!isEmail(email.value, { require_protocol: true }) )
      errorLabel = 'Формат не соответствует';
    checkedValidation(errorName, errorLabel, errorPassword);
    setErrorEmail(errorLabel);
  }

  function validatePassword(password) {
    let errorLabel = '';
    if (password.length < 7)
      errorLabel = 'Обязательное поле, не менее 7 символов';
    checkedValidation(errorName,errorEmail,errorLabel);
    setErrorPassword(errorLabel)
  }

  function checkedValidation(errorName, errorEmail, errorPassword) {
    if (errorName === '' && errorEmail === '' &&  errorPassword === ''){
      setEnableButton(true);
    }
    else
      setEnableButton(false);
  }

  function  onClickLink() {
    props.OnClickLink('');
  }

  return (
    <div className="register">
      <NavLink className="register__logo" to="/"><img className="logo__image"  alt="Логотип" src={logo} /></NavLink>
      <Form title="Добро пожаловать!" buttonText="Зарегистрироваться" handleSubmit={handleSubmit} disabledButton={enableButton} >
        <p className="register__label">Имя</p>
        <input type="text" className="register__text" name="name"
          placeholder="Иля" value={name} onChange={nameChange} required
        />
        <span className="register__error_input">{errorName}</span>
        <p className="register__label">E-mail</p>
        <input type="email" className="register__text" name="email"
          placeholder="Email" value={email} onChange={emailChange} required
        />
        <span className="register__error_input">{errorEmail}</span>
        <p className="register__label">Пароль</p>
        <input type="password" className="register__text" name="password"
          placeholder="Пароль" value={password} onChange={passwordChange} required
        />
        <span className="register__error_input">{errorPassword}</span>
      </Form>
      <span className="login__error_input">{props.errorText}</span>
      <p className="register__come" >Уже зарегистрированы?<NavLink  onClick={onClickLink} className="register__link" to="/sign-in">Войти</NavLink></p>
    </div>
  );
}

export default Register;
