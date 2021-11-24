import './Techs.css';

function Techs() {
  return (
    <div className="techs" id="techs">
      <h2 className="techs__header">Технологии</h2>
      <h3 className="techs__name">7 технологий</h3>
      <p className="techs__description">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="techs__list" >
        <li className="list_item" >HTML</li>
        <li className="list_item" >CSS</li>
        <li className="list_item" >JS</li>
        <li className="list_item" >React</li>
        <li className="list_item" >Git</li>
        <li className="list_item" >Express.js</li>
        <li className="list_item" >mongoDB</li>
      </ul>
    </div>
  );
}

export default Techs;
