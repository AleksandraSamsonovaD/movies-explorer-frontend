import './MoviesCard.css';
import save from '../../images/save.svg';
import saved from '../../images/saved.svg';
import del from '../../images/del.svg';

function MoviesCard(props) {

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч. ' + minutes + 'м.';
  }
  function clickButton(e) {
    e.preventDefault();
    if (props.page__save) {
      props.onDeleteMovies(props.movie._id);
    }
    else if (!props.saved) {
      props.onSaveMovie(props.movie);
    }
    else if (props.saved) {
      props.onDeleteMovies(props.movie.id);
    }
  }
  return (
    <div className="moviesCard">
      <div className="moviesCard__contener">
        <div className="moviesCard__desription">
          <h2 className="moviesCard__title">{props.movie.nameRU}</h2>
          <p className="moviesCard__duration">{getTimeFromMins(props.movie.duration)}</p>
        </div>
        <button type="button" className={`moviesCard__save ${props.saved ? 'moviesCard__daved' : ''}`} onClick={clickButton}>
          <img className={`moviesCard__icon ${props.saved ? 'moviesCard__icon_hidden' : ''} ${props.page__save ? 'moviesCard__icon_hidden' : ''}`} alt="сохранить" src={save} />
          <img className={`moviesCard__icon ${props.saved ? '' : 'moviesCard__icon_hidden'} `} alt="сохранено" src={saved} />
          <img className={`moviesCard__icon ${props.page__save ? '' : 'moviesCard__icon_hidden'}`} alt="удалить" src={del} />

        </button>
      </div>
      <img className="moviesCard__image" alt={props.movie.nameRU} src= {`${props.page__save ?  props.movie.image : `https://api.nomoreparties.co${props.movie.image.url}`}`}  />
    </div>
  );
}

export default MoviesCard;
