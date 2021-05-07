import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addPlayer } from '../../helpers/data/playersData';

export default function PlayerForm({
  setPlayers,
  name,
  imageUrl,
  position,
  firebaseKey,
}) {
  const [player, setPlayer] = useState({
    name: name || '',
    imageUrl: imageUrl || '',
    position: position || '',
    firebaseKey: firebaseKey || ''
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPlayer(player).then((playerArray) => setPlayers(playerArray));

    setPlayer({
      name: '',
      imageUrl: '',
      position: '',
      firebaseKey: ''
    });
  };

  return (
    <div className='player-form'>
    <Form id='addPlayerForm' autoComplete='off' onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="name"></Label>
        <Input
          name="name"
          type="text"
          placeholder="Player Name"
          value={player.name}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="imageUrl"></Label>
        <Input
          name="imageUrl"
          type="url"
          placeholder="Player Image"
          value={player.imageUrl}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="position"></Label>
        <Input
          name="position"
          type="text"
          placeholder="Player Position"
          value={player.position}
          onChange={handleInputChange}
        />
      </FormGroup>

      <Button color= 'primary' type='submit'>Submit</Button>
    </Form>
  </div>
  );
}

PlayerForm.propTypes = {
  setPlayers: PropTypes.func,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  position: PropTypes.string,
  firebaseKey: PropTypes.string
};
