import React from "react";

const FourHourCast = ({time,temperature,humidity})=>{
    return(
        <div className="dayForecast"> 
        <p className="Time"> {time}</p>
        <div className="dummyImage"></div>
        <p className="temperature">{temperature}</p>
        <div className="dummyImage"></div>
        <p className="humidity">{humidity}</p>
        <div className="borderBottom"></div>
        </div>
    )
};
export default FourHourCast