import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <div className="moviesCardList">
      <h2 className={`moviesCardList__header ${props.movies.length < 1 ? '': 'moviesCardList__header_hidden'}`} >Ничего не найдено</h2>
      {props.movies?.map((movie) => (
                    <MoviesCard key={`${props.page__save ?  movie._id : movie.id}`}
                                movie={movie}
                                saved= {props.page__save ?  false : props.onCheckSaved(movie.id) }
                                page__save={props.page__save}
                                onDeleteMovies={props.onDeleteMovies}
                                onSaveMovie={props.onSaveMovie}  />
                ))}
    </div>
  );
}
//saved--сохранен ли фильм
//page__save -- страница сохраненые фильмов
export default MoviesCardList;
