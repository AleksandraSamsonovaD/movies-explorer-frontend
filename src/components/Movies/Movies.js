import './Movies.css';
import SearchForm from'../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
  return (
    <div className="movies">
      <SearchForm/>
      <MoviesCardList movies={props.movies} page__save={false}/>
      <button className="movies__button">Ещё</button>
    </div>
  );
}

export default Movies;
