import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer_desription" >Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer_blocks">
        <p className="footer__copyright" >&copy;2021.</p>
        <div className="footer__links">
          <a className="footer__link" href="#">Яндекс.Практикум</a>
          <a className="footer__link" href="#">Github</a>
          <a className="footer__link" href="#">Facebook</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
