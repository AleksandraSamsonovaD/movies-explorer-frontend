import './MoviesCardList.css';
import MoviesCard from '../MoviesCard/MoviesCard';
import { useEffect, useState, useCallback } from "react";

function MoviesCardList(props) {
  const [moviesCount, setMoviesCount] = useState(12);
  const [countAddMovies, setСountAddMovies] = useState(3);

  function calculateMovie(width) {
    if (width > 1280) {
      setMoviesCount(12);
      setСountAddMovies(3);
    }
    else if (width < 1280 && width > 786) {
      setMoviesCount(8);
      setСountAddMovies(2);
    }
    else if (width > 320 && width < 786) {
      setMoviesCount(5);
      setСountAddMovies(2);
    }

  }
  const handleWindowResize = useCallback(event => {
    calculateMovie(window.innerWidth);
  }, []);

  useEffect(() => {
    calculateMovie(window.innerWidth);
  }, []);
  
  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, [handleWindowResize]);



  function showMoreCards() {
    setMoviesCount( moviesCount + countAddMovies );
  };

  return (
    <div>
      <h2>{props.header}</h2>
      <div className="moviesCardList">
        {props.movies?.map((movie) => (
          <MoviesCard key={`${props.page__save ? movie._id : movie.id}`}
            movie={movie}
            saved={props.page__save ? false : props.onCheckSaved(movie.id)}
            page__save={props.page__save}
            onDeleteMovies={props.onDeleteMovies}
            onSaveMovie={props.onSaveMovie} />
        )).slice(0, moviesCount)}

      </div>
      {moviesCount < props.movies?.length ?
        <button className="movies__button" onClick={showMoreCards}>Ещё</button> : ''}
    </div>
  );
}
//saved--сохранен ли фильм
//page__save -- страница сохраненые фильмов
export default MoviesCardList;
