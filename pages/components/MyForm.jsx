/* eslint-disable no-throw-literal */
/* eslint-disable no-console */
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { useState } from 'react';

const MyForm = ({
  hideModal, showLocAlert, setAddress, setCoords,
}) => {
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
        if (results.status === 'ZERO_RESULTS') {
          throw 'No results found';
        }
        const { data } = results.data;
        const addressComponents = data.address_components;
        const { lat, lng } = data.geometry.location;
        const address = {
          street: '',
          city: '',
          state: '',
          country: '',
        };
        addressComponents.forEach((component) => {
          const { types } = component;
          if (types.includes('locality')) {
            address.city = component.long_name;
          } else if (types.includes('administrative_area_level_1')) {
            address.state = component.long_name;
          } else if (types.includes('country')) {
            address.country = component.long_name;
          }
        });
        setAddress(address);
        setCoords({ lon: lng, lat });
        showLocAlert();
      })
      .catch((err) => {
        // eslint-disable-next-line no-alert
        window.alert('Location not found. Try again.');
        console.error(err);
      });
    hideModal();
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group controlId="formStreet">
        <Form.Label>
          Street Address (optional)
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter street address here"
          onChange={(e) => setStreet(e.target.value)}
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
