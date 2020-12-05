import React, {useState, useEffect} from 'react';
import './App.css';


function App({place}) {
  const [error, setError] = useState(false);
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
        setError(false);
        setWeather(result.main.temp);
        setCity(result.name);
      }
    ).catch((err) =>{
        console.error('Error:', err);
        setIsLoaded(false);
        setError(true);
  },);
}, [REACT_APP_WEATHER_KEY, place]);

  if (error) {
    return <div className="App-header">Error: could not find {window.localStorage.getItem('storedCity')}</div>;
  } else if (!isLoaded) {
    return <div className="App-header">Loading...</div>;
  } else {
    return (
      <div className="App-header">Current temperature in {city}: {weather} °C</div>
    );
  }
}

export default App;
