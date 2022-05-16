import { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = ({ latlng }) => {
  const [weatherData, setWeatherData] = useState();

  useEffect(() => {
    if (latlng) {
      axios
        .get(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latlng[0]}&lon=${latlng[1]}`)
        .then((response) => setWeatherData(response.data))
        .catch((error) => console.log(error));
    }
  }, [latlng]);

  if (!weatherData || !latlng) return <div>Unable to fetch data.</div>;

  const currentTemperature = weatherData.properties.timeseries[0].data.instant.details.air_temperature;
  const currentWindSpeed = weatherData.properties.timeseries[0].data.instant.details.wind_speed;

  return (
    <div>
      <h2>{currentTemperature} celcius</h2>
      <h3>{currentWindSpeed} m/s</h3>
    </div>
  );
};

export default Weather;
