import React from "react"
import "../App.css"

const Weather = ({weather}) => {
        let colorMe;
    
        if (weather.main.temp>= 90){
            colorMe = <h1 style={{color: "red"}}>{weather.main.temp}</h1>
        } else if (weather.main.temp <= 40) {
            colorMe = <h1 style={{color: "blue"}}>{weather.main.temp}</h1>
        } else {
            colorMe = <h1>{weather.main.temp}</h1>
        }

    return <div className="currentWeather">
        <h1 className="cityname">{weather.name}</h1>
        <h3>{weather.weather[0].description}</h3> 
        <h2>{colorMe} °F</h2> 
        <h3>Max Temp: {weather.main.temp_max} °F</h3>
        <h3>Min Temp: {weather.main.temp_min} °F</h3>
    </div>
}

export default Weather