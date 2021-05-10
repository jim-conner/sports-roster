import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import PropTypes from 'prop-types';
import { addPlayer, updatePlayer } from '../../helpers/data/playersData';

const PlayerForm = ({
  setPlayers,
  name,
  imageUrl,
  position,
  firebaseKey,
  uid,
  user
}) => {
  const [player, setPlayer] = useState({
    name: name || '',
    imageUrl: imageUrl || '',
    position: position || '',
    firebaseKey: firebaseKey || null,
    uid: user.uid || ''
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (player.firebaseKey) {
      updatePlayer(player, firebaseKey, uid).then((response) => setPlayers(response));
    } else {
      addPlayer(player, uid).then((response) => setPlayers(response));

      // setPlayer({
      //   name: '',
      //   imageUrl: '',
      //   position: '',
      //   firebaseKey: '',
      //   uid: ''
      // });
    }
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
};

PlayerForm.propTypes = {
  setPlayers: PropTypes.func,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
  position: PropTypes.string,
  firebaseKey: PropTypes.string,
  uid: PropTypes.string,
  user: PropTypes.any
};

export default PlayerForm;
