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
        console.log(currentWeather)
        const{weather}=currentWeather;
        weatherVerb=weather[0].main;
        description=weather[0].description;
        weatherImage=`http://openweathermap.org/img/w/${weather[0].icon}.png`
       const {temperature}=currentWeather;
        temp=temperature.temp;
        feelsLike=temperature.feels_like;
        document.title= `${weatherVerb} ${temp}ºc`
        location=currentWeather["location"]
    }
   return (
    <div className="weatherContainer currentWeather">
    <h3>The Weather Right Now</h3>
<h4>{weatherVerb}</h4>
<h3>Location You Searched</h3>
<p className="currentLocation"> {location}</p>
<h4>Current Temperature</h4>
<p>{temp}ºc</p>
<h4>Feels Like</h4>
<p>{feelsLike}ºc</p>
<img className="currentWeatherIcon" src={weatherImage}alt={description}/>
<p>{windSpeed}</p>
<p>{description}</p>
    </div>

   )
  

}
export default CurrentWeather