import './Profile.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Profile(props) {
  const [name, setName] = useState(props.name);
  const [email, setEmail] = useState(props.email);

  function nameChange(e) {
    setName(e.target.value);
  }
  function emailChange(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.handleSubmit(name, email);
  }

  function handleSubmitOut(e) {
    e.preventDefault();
    props.handleSubmitOut();
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
        <div className="profile__input">
          <p className="profile__label">Email</p>
          <input type="text" className="profile__text" name="email"
            placeholder="Email" value={email} onChange={emailChange}
          />
        </div>
        <button type="submit" className="profile__save" >Редактировать</button>
      </form>
      <NavLink className="profile__out" to="/sign-up" onClick={handleSubmitOut} >Выйти</NavLink>
    </div>
  );
}

export default Profile;