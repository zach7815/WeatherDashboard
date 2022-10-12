import React from "react";


const FourHourCast = ({time,temperature,humidity, weatherIcons, Description})=>{
   
    return(
        <div className="dayForecast"> 
        <p className="Time"> {time}</p>
        <img src={`http://openweathermap.org/img/w/${weatherIcons}.png`} alt={Description}/>
        <p className="temperature">{temperature}ºc</p>
       <img src="./images/water-drop(24x24)@2x.png" alt="water droplet to symbolise humidity"/>
        <p className="humidity">{humidity}%</p>
        <div className="borderBottom"></div>
        </div>
    )
};
export default FourHourCast