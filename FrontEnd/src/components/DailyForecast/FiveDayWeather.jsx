import React from "react";
import FourHourCast from "./FourHourCast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {icon } from '@fortawesome/fontawesome-svg-core/import.macro' ;

const FiveDayForecast = ({day, forecast})=>{
    let times, weatherIcons, temperature, humidity;
const handleProp = (prop)=>{
    if(!prop){
       return;
    }
    else{
       ( {times, weatherIcons, temperature, humidity} = prop);
       return(
       times.map((time,index)=>{
            return(
                <FourHourCast  key={index} time={time}  weatherIcons={weatherIcons[index]} temperature={temperature[index]} humidity={humidity[index]}/>
            )
       })
       ) ;
    };

};

    return (
        <div className="weatherContainer">
        <div className="dayOfWeek"> 
        <FontAwesomeIcon icon={icon({name: 'calendar', style: 'regular'})} />
        <h4 className="day"> {day}</h4>
        <div className="borderBottom"></div>
        </div>
     {handleProp(forecast)}
        </div>
    )
};

export default FiveDayForecast;
