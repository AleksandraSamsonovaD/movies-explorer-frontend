import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function SavedMovies(props) {
  return (
    <div className="savedMovies">
      <SearchForm onSearch={props.onSearch} />
        {props.onLoadingMovies ? 
        <Preloader/> :
        <MoviesCardList movies={props.movies} page__save={true} onDeleteMovies={props.onDeleteMovies} />
        }
    </div>
  );
}

export default SavedMovies;
