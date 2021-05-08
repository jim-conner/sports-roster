import React from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../Views/Home';
import AddPlayer from '../Views/AddPlayer';
import TeamRoster from '../Views/TeamRoster';

export default function Routes({ user, players, setPlayers }) {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}
        />
        <Route
          path='/add-player'
          component={() => <AddPlayer
            user={user}
            setPlayers={setPlayers}
          />}
        />
        <Route
          path='/team-roster'
          component={() => <TeamRoster
            user={user}
            setPlayers={setPlayers}
            players={players}
            />}
        />
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  players: PropTypes.array.isRequired,
  setPlayers: PropTypes.func

};
