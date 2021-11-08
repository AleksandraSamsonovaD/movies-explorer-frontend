import './Navigation.css';
import { NavLink} from 'react-router-dom';

function Navigation(props) {
  return (
    <nav className="navigation">
      <NavLink className = {`navigation__item ${props.loggedIn ? '':'navigation__item_hidden'}`} to="/movies">Фильмы</NavLink>
      <NavLink className = {`navigation__item ${props.loggedIn ? '':'navigation__item_hidden'}`} to="/saved-movies">Сохраненые фильмы</NavLink>
      <NavLink className = {`navigation__item ${props.loggedIn ? 'navigation__item_hidden':''}`} to="/sign-up">Зарегистрироваться</NavLink>
      <NavLink className = {`navigation__item ${props.loggedIn ? 'navigation__item_hidden':''}`} to="/sign-in"><button className="navigation__button">Войти</button></NavLink>
    </nav>
  );
}

export default Navigation;
