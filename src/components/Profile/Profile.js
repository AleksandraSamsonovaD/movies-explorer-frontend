import './Profile.css';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Profile(props) {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [enableButton, setEnableButton] = useState(false);
  const [saveOk, setSaveOk] = useState('');
  
  useEffect(()=>{
    setName(props.name);
  },[props.name]);

  useEffect(()=>{
    setEmail(props.email);
  },[props.email]);

  function nameChange(e) {
    setName(e.target.value);
    validateName(e.target.value);
    setSaveOk('');
  }
  function emailChange(e) {
    setEmail(e.target.value);
    validateEmail(e.target);
    setSaveOk('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(name, email, setSaveOk);
  }

  function handleSubmitOut(e) {
    e.preventDefault();
    props.handleSubmitOut();
  }

  function validateName(nameNew) {
    let errorLabel = '';
    if (nameNew.length < 1)
      errorLabel = 'Обязательное поле';
    else if (nameNew.length < 2 || nameNew.length > 30)
      errorLabel = 'Имя должно быть от 2 до 30 символов';
    checkedValidation(errorLabel, errorEmail, nameNew, email);
    setErrorName(errorLabel);
  }

  function validateEmail(emailNew) {
    let errorLabel = '';
    if (emailNew.value.length < 1)
      errorLabel = 'Обязательное поле';
    else if (!emailNew.checkValidity())
      errorLabel = 'Формат не соответствует';
    checkedValidation(errorName, errorLabel, name, emailNew.value);
    setErrorEmail(errorLabel);
  }

  function checkedValidation(errorNameNew, errorEmailNew, nameNew, emailNew) {
    if (errorNameNew === '' && errorEmailNew === '' && ( props.name != nameNew || props.email !=  emailNew) ){
      setEnableButton(true);
    }
    else
      setEnableButton(false);
  }

  return (
    <div className="profile">
      <h2 className="profile__title">{`Привет, ${props.name}!`}</h2>
      <form className="profile__container" onSubmit={handleSubmit}>
        <div className="profile__input">
          <p className="profile__label">Имя</p>
          <input type="text" className="profile__text" name="name"
            placeholder="Иля" value={name} defaultValue ={props.name} onChange={nameChange}
          />
        </div>
        <span className="profile__error_input">{errorName}</span>
        <div className="profile__input">
          <p className="profile__label">Email</p>
          <input type="email" className="profile__text" name="email"
            placeholder="Email" value={email} defaultValue ={props.email} onChange={emailChange}
          />
        </div>
        <span className="profile__error_input">{errorEmail}</span>
        <button type="submit"  className= {`profile__save ${enableButton ? '' : 'profile__save_disabled'} `}  >Редактировать</button>
        <span className="profile__error_input">{props.errorText}</span>
        <span className="profile__saveOk">{saveOk}</span>
      </form>
      <NavLink className="profile__out" to="/sign-up" onClick={handleSubmitOut} >Выйти</NavLink>
    </div>
  );
}

export default Profile;