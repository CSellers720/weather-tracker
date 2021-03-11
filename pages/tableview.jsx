import axios from 'axios';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import styles from '../styles/TableView.module.css';

const pad = (input) => {
  const string = input.toString();
  if (string.length === 1) {
    return `0${string}`;
  }
  return string;
};

const TableView = () => {
  const [tableData, setTableData] = useState();

  useEffect(async () => {
    await axios.get('/api/db-access')
      .then((results) => {
        setTableData(results.data.data);
      });
  }, []);

  if (tableData) {
    return (
      <Container fluid className={styles.container}>
        <h4>Temperature data is in Celsius</h4>
        <Table
          variant="weather"
          size="sm"
          striped
          bordered
        >
          <thead>
            <tr>
              <th>Date/Time</th>
              <th>Location</th>
              <th>Description</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
              <th>Wind</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(({
              main, weather, wind, location, time,
            }) => {
              const date = new Date();
              date.setTime(time);
              return (
                <tr key={date.getTime()}>
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
            })}
          </tbody>
        </Table>
      </Container>
    );
  }
  return (
    <Container fluid className={styles.container}>
      <h1>Loading...</h1>
    </Container>
  );
};

export default TableView;
