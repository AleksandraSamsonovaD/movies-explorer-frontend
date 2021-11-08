import './Promo.css';
import logo from '../../images/landing-logo.png';

function Promo() {
  return (
    <div className="promo">
      <h1 className="promo_header">Учебный проект студента факультета Веб-разработки.</h1>
      <img className="promo__logo" alt="Практикум" src={logo} />
    </div>
  );
}

export default Promo;
