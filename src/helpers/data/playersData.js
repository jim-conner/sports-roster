import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getPlayers = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/players.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const addPlayer = (player) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/players.json`, player)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/players/${response.data.name}.json`, body)
      // .then(() => resolve(console.warn('student added', player)))
        .then(() => getPlayers().then((playersArray) => resolve(playersArray)))
        .catch((error) => reject(error));
    });
});

export { addPlayer, getPlayers };
