import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from './components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';
import { getPlayers } from '../helpers/data/playersData';

function App() {
  const [user, setUser] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    getPlayers().then((response) => setPlayers(response));
  }, []);

  // console.warn(players);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInState) => {
      if (userInState) {
        const userInfoObject = {
          fullName: userInState.displayName,
          profileImage: userInState.photoURL,
          uid: userInState.uid,
          user: userInState.email.split('@gmail.com')[0]
        };
        setUser(userInfoObject);
      } else if (user || user === null) {
        setUser(false);
      }
    });
  }, []);

  return (
  <>
    <Router>
      <NavBar user={user}/>
      <Routes
        user={user}
        players={players}
        setPlayers={setPlayers}
        // setUser={setUser}
      />
    </Router>
  </>
  );
}

export default App;
