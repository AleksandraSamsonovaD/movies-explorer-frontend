import './Navigation.css';
import { NavLink } from 'react-router-dom';
import profile from '../../images/profile.svg';

 function Navigation(props) {
  return (
    <div className="navigation-wrap">
      <nav className= {`${props.loggedIn ? 'navigation_hidden' : 'navigation__noHidden'}`}>
        <NavLink className={`navigation__item ${props.loggedIn ? 'navigation__item_hidden' : ''}`} to="/sign-up">Регестрация</NavLink>
        <NavLink className={`navigation__item navigation__button ${props.loggedIn ? 'navigation__item_hidden' : ''}`} to="/sign-in">Войти</NavLink>
      </nav>
      <input type ="checkbox" id="checkbox"/>
      <label htmlFor="checkbox"  className= {`${props.loggedIn ? '' : 'navigation_hidden'}`}>
        <div className="navTab__icon"></div>
      </label>
      <nav className="navigation">
        <NavLink className={`navigation__about navigation__item ${props.loggedIn ? '' : 'navigation__item_hidden'}`} to="/">Главная</NavLink>
        <NavLink className={`navigation__item ${props.loggedIn ? '' : 'navigation__item_hidden'}`} to="/movies">Фильмы</NavLink>
        <NavLink className={`navigation__item ${props.loggedIn ? '' : 'navigation__item_hidden'}`} to="/saved-movies">Сохраненые фильмы</NavLink>
        <NavLink className={`navigation__item navigation__item_account ${props.loggedIn ? '' : 'navigation__item_hidden'}`} to="/profile"  >
          <p className="navigation__account">Аккаунт</p>
          <img className="navigation__icon" alt="Аккаунт" src={profile} />
          </NavLink>
      </nav>
    </div>

  );
}

export default Navigation;
