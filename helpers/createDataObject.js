/* eslint-disable camelcase */
/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */

import generateRGB from './generateRGB';

const createDataObject = ({ hourly, location }) => {
  const data = {
    labels: [],
    datasets: [],
    type: 'line',
  };

  const tempDataset = { data: [] };
  const feelsDataset = { data: [] };
  const date = new Date();
  hourly.forEach((point) => {
    if (point.dt && point.temp && point.feels_like) {
      const { dt, temp, feels_like } = point;
      date.setTime(dt * 1000);
      data.labels.push(`${date.getDate()}/${date.getMonth()} ${date.getUTCHours()}:00`);
      tempDataset.data.push(temp);
      feelsDataset.data.push(feels_like);
    }
  });
  data.labels = [...new Set(data.labels)];
  tempDataset.label = 'Temperature in degrees Celsius';
  tempDataset.backgroundColor = generateRGB(0.2);
  tempDataset.borderColor = generateRGB(100);
  feelsDataset.label = 'Feels like... (degrees Celsius)';
  feelsDataset.backgroundColor = generateRGB(.2);
  feelsDataset.borderColor = generateRGB(100);

  data.datasets.push(tempDataset);
  data.datasets.push(feelsDataset);
  return data;
};

export default createDataObject;
