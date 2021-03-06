import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../Views/Home';
import AddPlayer from '../Views/AddPlayer';
import TeamRoster from '../Views/TeamRoster';
import NotFound from '../Views/NotFound';

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  const routeChecker = (taco) => (user
    ? (<Component {...taco} user={user} />)
    : (<Redirect to={{ pathname: '/', state: { from: taco.location } }} />));

  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

PrivateRoute.propTypes = {
  component: PropTypes.func,
  user: PropTypes.any
};

export default function Routes({
  user, players, setPlayers
}) {
  return (
    <div>
      <Switch>
        <Route
          exact
          path='/'
          component={() => <Home
            user={user}
          />}
        />
        <PrivateRoute
          exact
          path='/add-player'
          user={user}
          component={() => <AddPlayer
            user={user}
            players={players}
            setPlayers={setPlayers}
          />}
        />
        <PrivateRoute
          exact
          path='/team-roster'
          user={user}
          setPlayers={setPlayers}
          component={() => <TeamRoster
            user={user}
            players={players}
            setPlayers={setPlayers}
            />}
        />
        <PrivateRoute path='*' component={NotFound}/>
      </Switch>
    </div>
  );
}

Routes.propTypes = {
  user: PropTypes.any,
  players: PropTypes.array,
  setPlayers: PropTypes.func.isRequired

};
