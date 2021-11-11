import './MoviesCard.css';
import save from '../../images/save.png';
import saved from '../../images/saved.png';
import del from '../../images/del.png';

function MoviesCard(props) {
  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч. ' + minutes + 'м.';
  }
  return (
    <div className="moviesCard">
      <div className="moviesCard__contener">
      <div className="moviesCard__desription">
        <h2 className="moviesCard__title">{props.movie.nameRU}</h2>
        <p className="moviesCard__duration">{getTimeFromMins(props.movie.duration)}</p>
      </div>
      <button type="button" className= {`moviesCard__save ${props.saved ? 'moviesCard__daved' : ''}`} >
        <img className={`moviesCard__icon ${props.saved ? 'moviesCard__icon_hidden' : ''} ${props.page__save ? 'moviesCard__icon_hidden' : ''}`} alt="сохранить" src={save} />
        <img className={`moviesCard__icon ${props.saved ? '' : 'moviesCard__icon_hidden'} ` } alt="сохранено" src={saved} />
        <img className={`moviesCard__icon ${props.page__save ? '' : 'moviesCard__icon_hidden'}`} alt="удалить" src={del} />
      
       </button>
      </div>
      <img className="moviesCard__image" alt={props.movie.nameRU} src={props.movie.image} />
    </div>
  );
}

export default MoviesCard;
