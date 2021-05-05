import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import PropTypes from 'prop-types';
import Home from '../Views/Home';
import AddPlayer from '../Views/AddPlayer';
import TeamRoster from '../Views/TeamRoster';

export default function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          path='/add-player'
          component={() => <AddPlayer />}
        />
        <Route
          path='/team-roster'
          component={() => <TeamRoster />}
        />
      </Switch>
    </div>
  );
}
