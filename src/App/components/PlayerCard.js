import React, { useState } from 'react';
import {
  Button,
  CardImg,
  Card,
  CardTitle,
  CardText,
  CardBody,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { deletePlayer } from '../../helpers/data/playersData';
import PlayerForm from './PlayerForm';

export default function PlayerCard({
  setPlayers,
  firebaseKey,
  name,
  position,
  imageUrl
}) {
  const [editNow, setEditNow] = useState(false);
  const handleClick = (type) => {
    switch (type) {
      case 'delete':
        deletePlayer(firebaseKey)
          .then((playersArray) => setPlayers(playersArray));
        break;
      case 'edit':
        setEditNow((prevState) => !prevState);
        break;
      default:
        console.warn('nothing selected');
    }
  };

  return (
      <Card className='customizedCard' body>
        <CardImg top
          width="100%"
          src={imageUrl}
          alt="Player Card"
        />
        <CardBody>
          <CardTitle tag="h4">{name}</CardTitle>
          <CardText tag="h5">{position}</CardText>
          {/* <Button color='primary'onClick={() => handleClick('view')}>
            View Author
          </Button> */}
          <Button color='info' onClick={() => handleClick('edit')}>
            {editNow ? 'Close Form' : 'Edit Form'}
          </Button>
          <Button color='danger'onClick={() => handleClick('delete')}>Delete Author
          </Button>
          {/* <Link to='add-player'>Go to Add Player</Link> */}
          {
          editNow && <PlayerForm
            setPlayers={setPlayers}
            firebaseKey={firebaseKey}
            name={name}
            imageUrl={imageUrl}
            position={position}
          />}
        </CardBody>
      </Card>
  );
}

PlayerCard.propTypes = {
  setPlayers: PropTypes.func,
  name: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.string,
  firebaseKey: PropTypes.string
};
