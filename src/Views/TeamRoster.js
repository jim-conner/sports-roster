import React from 'react';
import PropTypes from 'prop-types';
import PlayerCard from '../App/components/PlayerCard';

export default function TeamRoster({ players, setPlayers }) {
  return (
    <>
      <h1>Team Roster</h1>
    <div className='cardHolder'>
      {players.map((playerInfo) => (
        <PlayerCard
          key={playerInfo.firebaseKey}
          firebaseKey={playerInfo.firebaseKey}
          imageUrl={playerInfo.imageUrl}
          name={playerInfo.name}
          position={playerInfo.position}
          setPlayers={setPlayers}
        />
      ))}
    </div>
    </>
  );
}

TeamRoster.propTypes = {
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func
};
