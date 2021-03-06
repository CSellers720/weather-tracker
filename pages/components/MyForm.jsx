import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import styles from '../../styles/Form.module.css';

const MyForm = ({ hideModal }) => {
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`${city}, ${state}, ${country}`);
    hideModal();
  };

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <Form.Group controlId="formCity">
        <Form.Label>
          City Name
          <span className={styles.asterisk}>required</span>
        </Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter the name of your city"
          onChange={(e) => setCity(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group controlId="formState">
        <Form.Label>State Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter 2 character state code"
          onChange={(e) => setState(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formCountry">
        <Form.Label>Country Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter 2 character country code"
          onChange={(e) => setCountry(e.target.value)}
        />
      </Form.Group>
      <Button variant="form" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default MyForm;
