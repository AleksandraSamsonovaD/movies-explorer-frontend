import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio" >
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <p className="portfolio__linkName">Статичный сайт</p> 
          <a className="portfolio__linkName" href="https://github.com/AleksandraSamsonovaD/how-to-learn">↗</a>
        </li>
        <li className="portfolio__link">
          <p className="portfolio__linkName">Адаптивный сайт</p>
          <a className="portfolio__linkName" href="https://github.com/AleksandraSamsonovaD/russian-travel">↗</a>
        </li>
        <li className="portfolio__link">
          <p className="portfolio__linkName" >Одностраничное приложение</p>
          <a className="portfolio__linkName" href="https://github.com/AleksandraSamsonovaD/react-mesto-auth">↗</a>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
