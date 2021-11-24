import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer_desription" >Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer_blocks">
        <p className="footer__copyright" >&copy;2021.</p>
        <div className="footer__links">
          <a className="footer__link" href="https://practicum.yandex.ru/profile/web/">Яндекс.Практикум</a>
          <a className="footer__link" href="https://github.com/AleksandraSamsonovaD">Github</a>
          <a className="footer__link" href="https://vk.com/id111993315">Вконтакте</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
