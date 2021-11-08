import './NavTab.css';
import { NavLink} from 'react-router-dom';

function NavTab() {
  return (
    <nav className="navTab">
      <NavLink className = "navTab__item" to="/#">О проекте</NavLink>
      <NavLink className = "navTab__item" to="/#">Технологии</NavLink>
      <NavLink className = "navTab__item" to="/#">Студент</NavLink>
    </nav>
  );
}

export default NavTab;
