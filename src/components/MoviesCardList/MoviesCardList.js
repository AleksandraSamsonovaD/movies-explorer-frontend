import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <div className="moviesCardList">
      {props.movies?.map((movie) => (
                    <MoviesCard key={movie.id}
                                movie={movie}
                                saved={false}
                                page__save={props.page__save}  />
                ))}
    </div>
  );
}
//saved--сохранен ли фильм
//page__save -- страница сохраненые фильмов
export default MoviesCardList;
