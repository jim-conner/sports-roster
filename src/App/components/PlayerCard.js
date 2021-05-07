import React from 'react';
import {
  // Button,
  CardImg,
  Card,
  CardTitle,
  CardText,
  CardBody,
} from 'reactstrap';
import PropTypes from 'prop-types';

export default function PlayerCard({
  name,
  position,
  imageUrl,
  // firebaseKey
}) {
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
          </Button>
          <Button color='info' onClick={() => handleClick('edit')}>
              {editing ? 'Close Form' : 'Edit Author' }
          </Button>
          <Button color='danger'onClick={() => handleClick('delete')}>
            Delete Author
          </Button> */}
        </CardBody>
      </Card>
  );
}

PlayerCard.propTypes = {
  name: PropTypes.string.isRequired,
  position: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  // firebaseKey
};
