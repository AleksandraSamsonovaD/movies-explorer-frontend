import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList(props) {
  return (
    <div className="moviesCardList">
      {props.movies?.map((movie) => (
                    <MoviesCard key={movie.id}
                                movie={movie}
                                saved={true}
                                page__save={props.page__save}  />
                ))}
    </div>
  );
}

export default MoviesCardList;
