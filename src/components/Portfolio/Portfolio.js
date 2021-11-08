import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__link">
          <p className="portfolio__linkName">Статичный сайт</p> 
          <p className="portfolio__linkName">↗</p>
        </li>
        <li className="portfolio__link">
          <p className="portfolio__linkName">Адаптивный сайт</p>
          <p className="portfolio__linkName">↗</p>
        </li>
        <li className="portfolio__link">
          <p className="portfolio__linkName" >Одностраничное приложение</p>
          <p className="portfolio__linkName">↗</p>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
