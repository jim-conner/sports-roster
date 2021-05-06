import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ user }) {
  return (
    <div>
      <h1>Welcome!</h1>
      {
        user
          ? <h3>Add a player or view the Team Roster.</h3>
          : <h3>Please sign in to view your Team Roster.</h3>
      }
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
