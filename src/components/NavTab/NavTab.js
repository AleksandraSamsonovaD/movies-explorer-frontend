import './NavTab.css';
import { NavLink} from 'react-router-dom';


function NavTab() {
  return (
      <nav className="navTab">
      <NavLink className = "navTab__item" to="/aboutProject">О проекте</NavLink>
      <NavLink className = "navTab__item" to="/techs">Технологии</NavLink>
      <NavLink className = "navTab__item" to="/aboutMe">Студент</NavLink>
    </nav>
  );
}

export default NavTab;
