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
  uid,
  user,
  setPlayers,
  firebaseKey,
  name,
  position,
  imageUrl,
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
      <Card body className='customizedCard'
      key={firebaseKey} id={uid}
        >
        <CardImg top
          rounded
          width="100%"
          src={imageUrl}
          alt="Player Card"
        />
        <CardBody>
          <CardTitle tag="h4">{name}</CardTitle>
          <CardText tag="h5">{position}</CardText>
          <Button color='info' onClick={() => handleClick('edit')}>
            {editNow ? 'Close Form' : 'Edit Form'}
          </Button>
          <Button color='danger'onClick={() => handleClick('delete')}>Delete Author
          </Button>
          {
          editNow && <PlayerForm
            setPlayers={setPlayers}
            firebaseKey={firebaseKey}
            uid={uid}
            user={user}
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
  uid: PropTypes.string,
  user: PropTypes.any,
  firebaseKey: PropTypes.string,
  name: PropTypes.string,
  position: PropTypes.string,
  imageUrl: PropTypes.string,
};
