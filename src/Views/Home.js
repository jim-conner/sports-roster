import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ user }) {
  return (
    <div
    >
      {
        user
          ? <h3>Welcome back!  <br/> Add a player or view your Team Roster.</h3>
          : <h3>Welcome! <br/> Please sign in to view your Team Roster</h3>
      }
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any,
};
