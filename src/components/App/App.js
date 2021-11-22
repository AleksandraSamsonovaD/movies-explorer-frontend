import './App.css';
import Main from '../Main/Main'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SavedMovies from '../SavedMovies/SavedMovies';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import { useEffect, useState } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Redirect, Route, useHistory, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';
import PageNotFound from '../PageNotFound/PageNotFound';
import api from '../../utils/MoviesApi.js';
import * as mainApi from '../../utils/MainApi.js';


function App() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState({ name: "", email: "" });
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMoviesValue] = useState([]);
  const [findMovies, setFindMovies] = useState([]);
  const [moviesSave, setMoviesSaveValue] = useState([]);
  const [findMoviesSave, setFindMoviesSave] = useState([]);
  const [saveMoviesFinded, setSaveMoviesFinded] = useState(false);//сбрасывать в false в routers
  const [onLoadingMovies, setOnLoadingMovies] = useState(false);

  useEffect(() => {
    //if (loggedIn) {
      const promisUserInfo = mainApi.getUserInfo();
      const promisGetMovies = mainApi.getMovies();
      Promise.all([promisUserInfo, promisGetMovies])
        .then(([userInform, initialMovies]) => {
          setCurrentUser({ name: userInform.data.name, email: userInform.data.email });
          setMoviesSaveValue(initialMovies.data);
          setLoggedIn(true);
          history.push("/")
        })
        .catch((err) => console.log(err));
   // }
  }, []);

  function searchMovies(findName, allMovies, shortFilm, setFinded) {
    let searchMovie = [];
    allMovies.forEach((movie) => {
      if (movie.nameRU.search(findName) != -1 && !(movie.duration < 40 ^ shortFilm) ) {
        searchMovie.push(movie);
      }
    })
    setFinded(searchMovie);
    setOnLoadingMovies(false);
  }
  function handleSubmitSearch(findName, shortFilm) {
    setOnLoadingMovies(true);
    setFindMovies([]);
    if (movies.length == 0) {
      api.getCards()
        .then((inputMovies) => {
          setMoviesValue(inputMovies);
          searchMovies(findName, inputMovies,shortFilm, setFindMovies);
        })
        .catch((err) => console.log(err));
    }
    else {
      searchMovies(findName, movies, shortFilm, setFindMovies);
    }
  }
  function handleSubmitSearchSaveMovies(findName, shortFilm) {
    setOnLoadingMovies(true);
    setFindMovies([]);
    searchMovies(findName, moviesSave, shortFilm, setFindMoviesSave);
    setSaveMoviesFinded(true);
  }

  function handleSubmitRegister(password, email, name) {

    mainApi.register(email, password, name).then((data) => {
      if (data) {
        history.push("/sign-in");
      }
    })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleSubmitLogin(password, email) {
    mainApi.authorize(email, password).then((data) => {
      if (data) {
        setLoggedIn(true);
        history.push("/");
        const promisUserInfo = mainApi.getUserInfo();
        const promisGetMovies = mainApi.getMovies();
        Promise.all([promisUserInfo, promisGetMovies])
          .then(([userInform, initialMovies]) => {
            setCurrentUser({ name: userInform.data.name, email: userInform.data.email });
            setMoviesSaveValue(initialMovies.data);
          })
          .catch((err) => console.log(err));
      }
    })
      .catch((err) => {
        console.log(err);
      });
  }

  function handleUpdateUser(name, email) {
    mainApi.updateUser(name, email)
      .then((newUserInfo) => {
        setCurrentUser({ name: newUserInfo.data.name, email: newUserInfo.data.email });
      })
      .catch((err) => console.log(err));
  }

  function handleSubmitOut() {
    mainApi.out()
      .then(() => setLoggedIn(false))
      .catch((err) => console.log(err));
  }

  function saveMovies(movie) {
    mainApi.saveMovies(movie.country,
      movie.director,
      movie.duration,
      movie.year,
      movie.description,
      `https://api.nomoreparties.co${movie.image.url}`,
      movie.trailerLink,
      movie.nameRU,
      movie.nameEN,
      `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
      movie.id)
      .then((newMovies) => {
        setMoviesSaveValue([newMovies.data, ...moviesSave]);
      })
        .catch((err) => console.log(err));
  }

  function deleteMovies(id) {
    let trueId = matchingIdSereverToDB(id);
    mainApi.deleteMovies(trueId)
    .then(()=>{
      setMoviesSaveValue((state) => {return state.filter((m) => {return m._id != trueId})});
    })
    .catch((err) => console.log(err));
  }

  function matchingIdSereverToDB(id) {
    const regex = /^[0-9a-fA-F]{24}$/;
    if (!regex.test(id)){
      return moviesSave.find((movie)=>{
        return movie.movieId == id})._id;
    }
    return id;
  }

  function checkSaved(id) {
    if (moviesSave)
     return moviesSave.some(i => i.movieId === id);
    else
     return false;
  }

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        {loggedIn ? <Header loggedIn={loggedIn} onClickSavedMovies={setSaveMoviesFinded}/> : ''}
        <Switch>
          <Route path="/sign-in">
            <Login handleSubmit={handleSubmitLogin} />
          </Route>
          <Route path="/sign-up">
            <Register handleSubmit={handleSubmitRegister} />
          </Route>
          <Route path="/movies">
            {!loggedIn ? <Redirect to="/" /> : <Movies movies={findMovies} onSearch={handleSubmitSearch} onSaveMovie={saveMovies}  onCheckSaved={checkSaved} onDeleteMovies={deleteMovies} onLoadingMovies={onLoadingMovies}/>}
          </Route>
          <Route path="/saved-movies">
            {!loggedIn ? <Redirect to="/" /> : <SavedMovies movies={saveMoviesFinded ? findMoviesSave : moviesSave} onDeleteMovies={deleteMovies} onLoadingMovies={onLoadingMovies} onSearch={handleSubmitSearchSaveMovies}/>}
          </Route>
          <Route path="/profile">
            {!loggedIn ? <Redirect to="/" /> : <Profile name={currentUser.name} email={currentUser.email} handleSubmit={handleUpdateUser} handleSubmitOut={handleSubmitOut} />}
          </Route>
          <Route exact path="/">
            {loggedIn ? '' : <Header loggedIn={loggedIn} />}
            <Main />
          </Route>
          <Route >
            <PageNotFound />
          </Route>
        </Switch>
        {loggedIn ? <Footer /> : ''}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
