import React from 'react';
import PropTypes from 'prop-types';
import PlayerForm from '../App/components/PlayerForm';

export default function AddPlayer({ setPlayers, user }) {
  return (
    <div>
      <h1>Add Player Form</h1>
      <PlayerForm
        setPlayers={setPlayers}
        user={user}
      />
    </div>
  );
}

AddPlayer.propTypes = {
  setPlayers: PropTypes.func.isRequired,
  user: PropTypes.any

};
