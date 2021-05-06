import React, { useState } from 'react';
import {
  Button, Form, FormGroup, Label, Input
} from 'reactstrap';
import addPlayer from '../../helpers/data/playersData';

export default function PlayerForm() {
  const [player, setPlayer] = useState({
    name: '',
    imageUrl: '',
    position: ''
  });

  const handleInputChange = (e) => {
    setPlayer((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addPlayer(player).then((playersArray) => setPlayer((playersArray)));
    addPlayer(player);
    // console.warn(e.target.value);
  };

  return (
    <div className='player-form'>
    <Form id='addPlayerForm' autoComplete='off' onSubmit={handleSubmit}>
      <FormGroup>
        <Label for=""></Label>
        <Input
          name="name"
          type="text"
          placeholder="Name"
          value={player.name}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="imageUrl"></Label>
        <Input
          name="imageUrl"
          type="text"
          placeholder="Image URL"
          value={player.imageUrl}
          onChange={handleInputChange}
        />
      </FormGroup>

      <FormGroup>
        <Label for="position"></Label>
        <Input
          name="position"
          type="text"
          placeholder="Position"
          value={player.position}
          onChange={handleInputChange}
        />
      </FormGroup>

      <Button color= 'primary' type='submit'>Submit</Button>
    </Form>
  </div>
  );
}