import React from "react";

const CurrentWeather =({currentWeather})=>{
   let location;
   let temp;
   let feelsLike;
   let description;
   let weatherVerb;
   let weatherImage;
   let windSpeed;
    if(!currentWeather){
        location= temp= feelsLike= description= weatherVerb= windSpeed= weatherImage="loading...";
    }

    else{
        ({currentWeather}=currentWeather)
        const{weather}=currentWeather;
        weatherVerb=weather[0].main;
        description=weather[0].description;
        weatherImage=weather[0].icon;
       const {temperature}=currentWeather;
       console.log(temperature);
        temp=temperature.temp;
        feelsLike=temperature.feels_like
    }
   return (
    <div className="weatherContainer currentWeather">
<h2>{weatherVerb}</h2>
<h3 className="currentLocation"> {location}</h3>
<p>Current Temperature:{temp}ºc</p>
<p>Feels Like:{feelsLike}ºc</p>
<img className="currentWeatherIcon" src={`http://openweathermap.org/img/w/${weatherImage}.png`}alt={description}/>
<p>{windSpeed}</p>
<p>{description}</p>
    </div>

   )
  

}
export default CurrentWeather