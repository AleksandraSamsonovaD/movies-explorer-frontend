import './Header.css';
import logo from '../../images/logo_header.png';
import Navigation from '../Navigation/Navigation';
import { NavLink} from 'react-router-dom';

function Header(props) {
  return (
    <header className="header">
      <NavLink className="header__logo" to="/"><img alt="Логотип" src={logo} /></NavLink>
      <Navigation loggedIn={props.loggedIn} ></Navigation>
    </header>
  );
}

export default Header;
