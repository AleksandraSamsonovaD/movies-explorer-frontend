import './Login.css';
import Form from '../Form/Form';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import logo from '../../images/logo_header.png';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
    <div className="login">
      <img className="login__logo" alt="Логотип" src={logo} />
      <Form title="Рады видеть" buttonText="Войти" handleSubmit={handleSubmit}>
        <input type="text" className="login__text" name="email"
          placeholder="Email" value={email} onChange={emailChange}
        />
        <input type="password" className="login__text" name="password"
          placeholder="Пароль" value={password} onChange={passwordChange}
        />
      </Form>
      <p className="login__come" >Еще не зарегистрированы?<NavLink className="login__link" to="/sign-up">Зарегистрироваться</NavLink></p>
    
    </div>
  );
}

export default Login;
