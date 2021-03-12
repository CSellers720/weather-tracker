const genTrack = ({
  main, weather, wind, visibility, coord, location,
}) => {
  const newTrack = {
    time: Date.now(),
    main: {
      current: main.temp,
      feelsLike: main.feels_like,
      max: main.temp_max,
      min: main.temp_min,
      pressure: main.pressure,
      humidity: main.humidity,
    },
    weather: {
      main: weather[0].main,
      description: weather[0].description,
      icon: weather[0].icon,
    },
    visibility,
    wind: {
      speed: wind.speed,
      deg: wind.deg,
    },
    location: {
      city: location.city,
      state: location.state,
      country: location.country,
    },
    coord,
    hourly: [],
  };
  return newTrack;
};

export default genTrack;
