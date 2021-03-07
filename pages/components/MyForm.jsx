import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';

const MyForm = ({ hideModal, showLocAlert, setAddress }) => {
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/geocoding', {
      street, city, state, country,
    })
      .then((results) => {
        setAddress(results.data.data.formatted_address);
        showLocAlert();
      });
    hideModal();
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group controlId="formStreet">
        <Form.Label>
          Street Address
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your street address"
          onChange={(e) => setStreet(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formCity">
        <Form.Label>
          City Name
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the name of your city"
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formState">
        <Form.Label>State or Region</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter state or region name"
          onChange={(e) => setState(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formCountry">
        <Form.Label>Country Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter country code"
          onChange={(e) => setCountry(e.target.value)}
          required
        />
      </Form.Group>
      <Button variant="form" type="submit">
        Submit
      </Button>
      <Button variant="cancel" type="cancel" onClick={hideModal}>
        Cancel
      </Button>
    </Form>
  );
};

export default MyForm;
