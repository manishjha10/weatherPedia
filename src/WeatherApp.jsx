import SearchBox from './SearchBox';
import InfoBox from './InfoBox';
import './weather.css'; 
import { useState } from 'react';

export default function WeatherApp() {  
    const [weatherInfo,setweatherInfo] = useState({
        city: "Delhi",
        feelslike: 25.84,
        temp: 25.05,
        tempMin: 25.05,
        tempMax: 28.0,
        humidity: 47,
        weather: "haze"
    }); 
     
    let  updateInfo = (newInfo) => {
        setweatherInfo(newInfo); 
    }; 

    return (
        <div className="weather-container">
            <h2>Weather App </h2>
            <h3>"Take Charge of Your Day — Check the Weather."</h3>
            <SearchBox updateInfo={updateInfo} />
            <InfoBox info={weatherInfo} />
        </div>
    )
}
