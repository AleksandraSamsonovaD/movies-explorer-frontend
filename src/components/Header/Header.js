import './Header.css';
import logo from '../../images/logo_header.png';
import Navigation from '../Navigation/Navigation';

function Header(props) {
  return (
    <header className="header">
      <img className="header__logo" alt="Логотип" src={logo} />
      <Navigation loggedIn={props.loggedIn}></Navigation>
    </header>
  );
}

export default Header;
