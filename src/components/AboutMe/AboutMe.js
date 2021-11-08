import './AboutMe.css';

function AboutMe() {
  return (
    <div className="aboutMe">
      <h2 className="aboutMe__header">Студент</h2>
      <div className="aboutMe__contener">
        <div className="aboutMe__description">
          <h3 className="aboutMe__name">Александра</h3>
          <p className="aboutMe__profession">Фронтенд-разработчик, 25 лет</p>
          <p className="aboutMe__story">Я родился и живу в Подольске, закончила ИФИБ НИЯУ МИФИ.
            С августа 2020 года работалю в компании АО «ЦДУ» программистом.</p>
          <div className="aboutMe__links">
            <a className="aboutMe__link" href="#">Facebook</a>
            <a className="aboutMe__link" href="#">Github</a>
          </div>
        </div>
        <img className="aboutMe__photo" alt="Фото" src="/#" />
      </div>
    </div>
  );
}

export default AboutMe;
