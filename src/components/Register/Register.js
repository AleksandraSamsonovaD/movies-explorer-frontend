import './Register.css';
import Form from '../Form/Form';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/logo_header.png';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function nameChange(e) {
    setName(e.target.value);
  }
  function emailChange(e) {
    setEmail(e.target.value);
  }

  function passwordChange(e) {
    setPassword(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    //props.handleSubmit(password, email);
  }
  return (
    <div className="register">
      <img className="register__logo" alt="Логотип" src={logo} />
      <Form title="Добро пожаловать!" buttonText="Зарегистрироваться" handleSubmit={handleSubmit}>
      <p className="register__label">Имя</p>
      <input type="text" className="register__text" name="name"
          placeholder="Иля" value={name} onChange={nameChange}
        />
        <p className="register__label">E-mail</p>
        <input type="text" className="register__text" name="email"
          placeholder="Email" value={email} onChange={emailChange}
        />
        <p className="register__label">Пароль</p>
        <input type="password" className="register__text" name="password"
          placeholder="Пароль" value={password} onChange={passwordChange}
        />
      </Form>
      <p className="register__come" >Уже зарегистрированы?<NavLink className="register__link" to="/sign-in">Войти</NavLink></p>
    </div>
  );
}

export default Register;
