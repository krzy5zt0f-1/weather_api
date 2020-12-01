import React, {useState, useEffect} from 'react';
import './App.css';


function App({place}) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState([]);
  const  { REACT_APP_WEATHER_KEY } = process.env;
  useEffect(() => {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=" +
    `${place || "London" }` +
    REACT_APP_WEATHER_KEY)
    .then(res => res.json())
    .then(
      (result) => {
        setIsLoaded(true);
        setWeather(result.main.temp);
        setCity(result.name);
      },
      (error) => {
        setIsLoaded(true);
          setError(error);
      }
    )
  },)

  if (error) {
    return <div className="App-header">Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div className="App-header">Loading...</div>;
  } else {
    return (
      <div className="App-header">Current temperature in {city}: {weather} °C</div>
    );
  }
}

export default App;
