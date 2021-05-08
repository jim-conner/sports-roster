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
  firebaseKey,
  name,
  position,
  imageUrl,
  setPlayers
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
      <Card body>
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
          <Button color='info' onClick={() => handleClick('edit')}>Edit Player
              {editNow && <PlayerForm
                setPlayers={setPlayers}
                firebaseKey={firebaseKey}
                name={name}
                imageUrl={imageUrl}
                position={position}
                /> }
          </Button>
          <Button color='danger'onClick={() => handleClick('delete')}>Delete Author
          </Button>
        </CardBody>
      </Card>
  );
}

PlayerCard.propTypes = {
  setPlayers: PropTypes.func,
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  firebaseKey: PropTypes.string.isRequired
};
