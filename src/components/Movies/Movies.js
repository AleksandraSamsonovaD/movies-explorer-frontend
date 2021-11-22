import './Movies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from '../Preloader/Preloader';

function Movies(props) {
  return (
    <div className="movies">
      <SearchForm onSearch={props.onSearch} />
      {props.onLoadingMovies ? 
      <Preloader/> :
      <MoviesCardList movies={props.movies} page__save={false} onSaveMovie={props.onSaveMovie} onCheckSaved={props.onCheckSaved} onDeleteMovies={props.onDeleteMovies}/>
      }
    </div>
  );
}

export default Movies;
