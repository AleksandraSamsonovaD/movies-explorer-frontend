import './SavedMovies.css';
import SearchForm from'../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

function SavedMovies(props) {
  return (
    <div className="savedMovies">
      <SearchForm/>
      <MoviesCardList movies={props.movies} page__save="true" />
    </div>
  );
}

export default SavedMovies;
