/*
  NOTE: This component really got away from me.
  if I had a bit more time I would break this down into a more modular
  and readable format.
*/

import { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import styles from '../../../styles/TableView.module.css';

const pad = (input) => {
  const string = input.toString();
  if (string.length === 1) {
    return `0${string}`;
  }
  return string;
};

const Row = ({ rowData }) => {
  const [editMode, setEditMode] = useState(false);

  const [dateInput, setDateInput] = useState(null);
  const [monthInput, setMonthInput] = useState(null);
  const [yearInput, setYearInput] = useState(null);

  const [cityInput, setCityInput] = useState(null);
  const [stateInput, setStateInput] = useState(null);
  const [countryInput, setCountryInput] = useState(null);

  const [tempInput, setTempInput] = useState(null);
  const [highInput, setHighInput] = useState(null);
  const [lowInput, setLowInput] = useState(null);

  const [pressureInput, setPressureInput] = useState(null);
  const [humidityInput, setHumidityInput] = useState(null);
  const [windInput, setWindInput] = useState(null);
  const [directionInput, setDirectionInput] = useState(null);

  const {
    main, weather, wind, location, time, _id,
  } = rowData;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/update', {
      dateInput,
      monthInput,
      yearInput,
      cityInput,
      stateInput,
      countryInput,
      tempInput,
      highInput,
      lowInput,
      pressureInput,
      humidityInput,
      windInput,
      directionInput,
    })
      .then((results) => {
        window.alert('Update functionality isn\'t currently working.', results.data);
      });
  };

  const date = new Date();
  date.setTime(time);
  if (!editMode) {
    return (
      <tr onClick={() => setEditMode(!editMode)}>
        <td>
          {date.toDateString()}
          <br />
          {`${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`}
        </td>
        <td>
          {location.city}
          <br />
          {location.state}
          <br />
          {location.country}
        </td>
        <td className={styles.iconTd}>
          <img className={styles.iconImg} alt="Weather Icon" src={`http://openweathermap.org/img/wn/${weather.icon}.png`} />
          <div className={styles.main}>
            {weather.main}
          </div>
          <div className={styles.desc}>
            {weather.description}
          </div>
        </td>
        <td>
          At listed time:
          {`  ${main.current}°`}
          <br />
          High:
          {`  ${main.max}°`}
          <br />
          Low:
          {`  ${main.min}°`}
          <br />
        </td>
        <td>
          {`${main.pressure} hPa`}
        </td>
        <td>
          {main.humidity}
          %
        </td>
        <td>
          {`${wind.speed} `}
          m/sec
          <br />
          {`${wind.deg}  `}
          degrees
        </td>
      </tr>
    );
  }
  return (
    <tr>
      <td>
        <Form size="sm">
          <Form.Group>
            <Form.Label>
              Date
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setDateInput(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Month
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setMonthInput(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Year
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setYearInput(e.target.value)}
            />
          </Form.Group>
        </Form>
        <br />
      </td>
      <td>
        <Form>
          <Form.Group>
            <Form.Label>
              City
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCityInput(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              State
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setStateInput(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Country
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setCountryInput(e.target.value)}
            />
          </Form.Group>
        </Form>
      </td>
      <td className={styles.iconTd}>
        <img className={styles.iconImg} alt="Weather Icon" src={`http://openweathermap.org/img/wn/${weather.icon}.png`} />
        <div className={styles.main}>
          {weather.main}
        </div>
        <div className={styles.desc}>
          {weather.description}
        </div>
      </td>
      <td>
        <Form>
          <Form.Group>
            <Form.Label>
              At listed time
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setTempInput(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              High
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setHighInput(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Low
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setLowInput(e.target.value)}
            />
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group>
            <Form.Label>
              Pressure
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setPressureInput(e.target.value)}
            />
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group>
            <Form.Label>
              % Humidity
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setHumidityInput(e.target.value)}
            />
          </Form.Group>
        </Form>
      </td>
      <td>
        <Form>
          <Form.Group>
            <Form.Label>
              Wind Speed
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setWindInput(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>
              Direction
            </Form.Label>
            <Form.Control
              type="text"
              onChange={(e) => setDirectionInput(e.target.value)}
            />
          </Form.Group>
          <Button variant="table" onClick={(e) => handleSubmit(e)}>Submit</Button>
          <Button variant="table" onClick={() => setEditMode(!editMode)}>Cancel</Button>
        </Form>
      </td>
    </tr>
  );
};

export default Row;
