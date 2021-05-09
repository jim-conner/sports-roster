import React from 'react';
import PropTypes from 'prop-types';

export default function Home({ user }) {
  return (
    <div>
        {
          user !== null
          && <div>
            {
              user
                ? <h3>Add a player or view the Team Roster.</h3>
                : <h3>Welcome! Please sign in to view your Team Roster</h3>
            }
          </div>
        }
      {/* {
        user ? <h3>Add a player or view the Team Roster.</h3>
          : <h3>Welcome! Please sign in to view your Team Roster.</h3>
      } */}
    </div>
  );
}

Home.propTypes = {
  user: PropTypes.any
};
