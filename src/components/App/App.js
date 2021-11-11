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
import {movies} from '../../utils/beatfilm-movies';
import PageNotFound from '../PageNotFound/PageNotFound';


function App() {
  const [currentUser, setCurrentUser] = useState({name:"Александра", email:"111"});
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        {loggedIn ? <Header loggedIn={loggedIn} /> : ''}
        <Switch>
          <Route path="/sign-in">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
          <Route path="/movies">
            {!loggedIn ? <Redirect to="/sign-in" /> : <Movies movies={movies} />}
          </Route>
          <Route path="/saved-movies">
            {!loggedIn ? <Redirect to="/sign-in" /> : <SavedMovies movies={movies} />}
          </Route>
          <Route path="/profile">
            {!loggedIn ? <Redirect to="/sign-in" /> : <Profile name={currentUser.name} email={currentUser.email} />}
          </Route>
          <Route exact path="/">
           {loggedIn ? '' :<Header loggedIn={loggedIn} /> }
            
            <Main />
          </Route>
          <Route path="*">
            <PageNotFound />
          </Route>
        </Switch>
        {loggedIn ? <Footer /> : ''}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
