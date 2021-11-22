import './Profile.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Profile(props) {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [enableButton, setEnableButton] = useState(true);

  function nameChange(e) {
    setName(e.target.value);
    validateName(e.target.value);
  }
  function emailChange(e) {
    setEmail(e.target.value);
    validateEmail(e.target);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(name, email);
  }

  function handleSubmitOut(e) {
    e.preventDefault();
    props.handleSubmitOut();
  }

  function validateName(name) {
    let errorLabel = '';
    if (name.length < 1)
      errorLabel = 'Обязательное поле';
    else if (name.length < 2 || name.length > 30)
      errorLabel = 'Имя должно быть от 2 до 30 символов';
    else
      errorLabel = '';
    checkedValidation(errorLabel, errorEmail);
    setErrorName(errorLabel);
  }

  function validateEmail(email) {
    let errorLabel = '';
    if (email.value.length < 1)
      errorLabel = 'Обязательное поле';
    else if (!email.checkValidity())
      errorLabel = 'Формат не соответствует';
    else
      errorLabel = '';
    checkedValidation(errorName, errorLabel);
    setErrorEmail(errorLabel);
  }

  function checkedValidation(errorName, errorEmail) {
    if (errorName === '' && errorEmail === '' ){
      setEnableButton(true);
    }
    else
      setEnableButton(false);
  }


  return (
    <div className="profile">
      <h2 className="profile__title">{`Привет, ${name}!`}</h2>
      <form className="profile__container" onSubmit={handleSubmit}>
        <div className="profile__input">
          <p className="profile__label">Имя</p>
          <input type="text" className="profile__text" name="name"
            placeholder="Иля" value={name} onChange={nameChange}
          />
        </div>
        <span className="profile__error_input">{errorName}</span>
        <div className="profile__input">
          <p className="profile__label">Email</p>
          <input type="email" className="profile__text" name="email"
            placeholder="Email" value={email} onChange={emailChange}
          />
        </div>
        <span className="profile__error_input">{errorEmail}</span>
        <button type="submit"  className= {`profile__save ${enableButton ? '' : 'profile__save_disabled'} `}  >Редактировать</button>
      </form>
      <NavLink className="profile__out" to="/sign-up" onClick={handleSubmitOut} >Выйти</NavLink>
    </div>
  );
}

export default Profile;