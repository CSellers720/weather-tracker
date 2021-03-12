/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Line, defaults } from 'react-chartjs-2';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import createDataObject from '../helpers/createDataObject';
import styles from '../styles/ChartView.module.css';

defaults.global.defaultFontColor = '#FFFFFF';

// const options = {
//   scales: {
//     yAxes: [
//       {
//         display: true,
//         ticks: {
//           beginAtZero: false,
//         },
//       },
//     ],
//   },
// };

const ChartView = () => {
  const [chartData, setChartData] = useState();
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    axios.get('/api/db-access', { limit: 3 })
      .then(({ data }) => {
        const formattedChartData = [];
        data.data.forEach(({ hourly, location, _id }) => {
          formattedChartData.push({
            hourly,
            location,
            id: _id,
          });
        });
        setChartData(formattedChartData);
        console.log(formattedChartData);
      })
      .catch((err) => {
        console.error('Chart view unable to access database', err);
      });
  }, []);

  if (chartData) {
    const { city, state, country } = chartData[selected].location;
    return (
      <Container className={styles.container}>
        <br />
        <h1>{`${city}, ${state}, ${country}`}</h1>
        <Dropdown>
          <Dropdown.Toggle>
            Select a location here
          </Dropdown.Toggle>
          <Dropdown.Menu>
            {chartData.map(({ location }, index) => (
              <Dropdown.Item eventKey={index} onClick={() => setSelected(index)}>
                {`${location.city}, ${location.state}, ${location.country}`}
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <Line data={createDataObject(chartData[selected])} />
      </Container>
    );
  }
  return (
    <Container fluid className={styles.container}>
      <h1>Loading</h1>
    </Container>
  );
};

export default ChartView;
