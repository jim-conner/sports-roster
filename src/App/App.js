import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import firebase from 'firebase/app';
import 'firebase/auth';
import NavBar from './components/NavBar';
import Routes from '../helpers/Routes';
import './App.scss';

function App() {
  const [user, setUser] = useState(null);

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
      <Routes user={user}/>
    </Router>
  </>
  );
}

export default App;
