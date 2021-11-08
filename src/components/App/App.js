import './App.css';
import Main from '../Main/Main'
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useEffect, useState } from "react";
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import { Redirect, Route, useHistory, Switch } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';


function App() {
  const [currentUser, setCurrentUser] = useState();
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Switch>
          <Route path="/sign-in">
            <Login />
          </Route>
          <Route path="/sign-up">
            <Register />
          </Route>
          <Route path="/">
            <Header className="header" loggedIn={loggedIn} />
            <Main />
            <Footer />
          </Route>
          <Footer />
        </Switch>

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
