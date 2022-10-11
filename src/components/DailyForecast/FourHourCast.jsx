import React from "react";

const FourHourCast = ({time,temperature,humidity, weatherIcons})=>{
    
    return(
        <div className="dayForecast"> 
        <p className="Time"> {time}</p>
        <img src={`http://openweathermap.org/img/w/${weatherIcons}.png`} alt="weather Icon"/>
        <p className="temperature">{temperature}ºc</p>
        <div className="dummyImage"></div>
        <p className="humidity">{humidity}%</p>
        <div className="borderBottom"></div>
        </div>
    )
};
export default FourHourCast