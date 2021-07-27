import React, {useState} from "react"
import './App.css';
import Form from "./components/Form"
import Weather from "./components/Weather"

function App() {

  const [weather, setWeather] = useState ({})


  const handleSubmit = async (inputZip) => {
    console.log(inputZip)
    const apiKey="74f9c6cd24fcdacc0cdae1519983ce41"
    const countryCode = "us&units=imperial"
    const response = await fetch (`http://api.openweathermap.org/data/2.5/weather?zip=${inputZip},${countryCode}&appid=${apiKey}`)
    const data = await response.json()
    setWeather(data)
  }

  return (
    <div className="App">
      <h1 className="app-title">Current Weather</h1>
      <Form handleSubmit={handleSubmit}/>
      {weather.main ? <Weather weather={weather}/> : null}
    </div>
  );
}

export default App;
