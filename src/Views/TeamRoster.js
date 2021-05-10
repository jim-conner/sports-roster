import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../App/components/PlayerCard';
// import { getPlayers } from '../helpers/data/playersData';

export default function TeamRoster({ user, players, setPlayers }) {
  // getPlayers(user.uid).then((response) => setPlayers(response));
  return (
    <>
      <h1>Team Roster</h1>
    <div className='cardHolder'>
      {players.map((playerInfo) => (
        <PlayerCard
          key={playerInfo.firebaseKey}
          firebaseKey={playerInfo.firebaseKey}
          user={user}
          imageUrl={playerInfo.imageUrl}
          name={playerInfo.name}
          position={playerInfo.position}
          uid={playerInfo.uid}
          setPlayers={setPlayers}
        />
      ))}
    </div>
    </>
  );
}

TeamRoster.propTypes = {
  players: PropTypes.array,
  setPlayers: PropTypes.func,
  user: PropTypes.any
};
