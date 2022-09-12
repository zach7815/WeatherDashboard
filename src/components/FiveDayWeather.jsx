import React from "react";
import FourHourCast from "./FourHourCast";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {icon } from '@fortawesome/fontawesome-svg-core/import.macro' 

const FiveDayForecast = ()=>{
    return (
        <div className="weatherContainer">
        <div className="dayOfWeek"> 
        <FontAwesomeIcon icon={icon({name: 'calendar', style: 'regular'})} />
        <h4 className="day"> Today</h4>
        <div className="borderBottom"></div>
        </div>
        
        <FourHourCast  time="08:00" temperature="22ºc" humidity="80"/> 
        <FourHourCast  time="12:00" temperature="22ºc" humidity="90"/> 
        <FourHourCast  time="16:00" temperature="22ºc" humidity="80"/> 
        <FourHourCast  time="20:00" temperature="22ºc" humidity="70"/> 
        <FourHourCast  time="00:00" temperature="10ºc" humidity="60"/> 
        </div>
    )
}

export default FiveDayForecast