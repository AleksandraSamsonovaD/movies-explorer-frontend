import './AboutProject.css';

function AboutProject() {
  return (
    <div className="aboutProject">
      <h2 className="aboutProject__header">О проекте</h2>
      <div className="description">
        <h3 className="description__item description__header post-1" >Дипломный проект включал 5 этапов</h3>
        <h3 className="description__item description__header post-2">На выполнение диплома ушло 5 недель</h3>
        <p  className="description__item post-3" >Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        <p  className="description__item post-4">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
      </div>
      <div className="plan">
        <div className="plan__term plan__back"><p className="plan__text">1 неделя</p></div>
        <div className="plan__term plan__front"><p className="plan__text">4 недели</p></div>
        <div className="plan__item">Back-end</div>
        <div className="plan__item">Front-end</div>
      </div>
    </div>
  );
}

export default AboutProject;
