import React, {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import CreditDetails from "./components/ImageCredit.jsx";
import SwiperFunction from "./components/DailyForecast/SwiperPagination.jsx";
import LocalDateAndTime from "./components/LocalTime.jsx";
import Tabs from "./components/TabsComponent/Tabs.jsx";
import "./styles.css"
import useFetch from "./components/useFetch.js";



const getLocationPromise = ()=>{
  return new Promise(function(resolve,reject){
    navigator.geolocation.getCurrentPosition(
      position=>resolve(position),
      error=>reject(error)
    )
  })
  }



function App() {
  const [forecast, setForecast]= useState();
  const [currentWeather,setCurrentWeather]=useState();
  const [location, setLocation]=useState();
  const [unsplashData, setUnsplashData]=useState();

// requests users current location
useEffect(()=>{
  getLocationPromise()
  .then(setLocation)
},[])

//makes unsplashImage API call
useFetch(location, "https://weather-dashboard-backend.onrender.com/api/unsplashImages", setUnsplashData)
// handles background image setting
useEffect(()=>{
const bgImage=document.querySelector(".backgroundImg")

  if(!unsplashData){
    bgImage.style.backgroundImage='url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")';
  }
  else{
 bgImage.style.backgroundImage=`url(${unsplashData["display_urls"]["full"]})`;
  }
},[unsplashData])

// requests current weather Data
useFetch(location, "https://weather-dashboard-backend.onrender.com/api/currentWeather", setCurrentWeather);


// request five days of forecast
useFetch(location,"https://weather-dashboard-backend.onrender.com/api/fiveDayForecast", setForecast)


  return (
    <div className="backgroundImg">
    <div className="imageOverlay">
 <div className="container">
<SearchBar setWeatherData={setCurrentWeather} setForecastData={setForecast} setImageData={setUnsplashData}/>
<LocalDateAndTime />
<CurrentWeather currentWeather={currentWeather}/>
<SwiperFunction forecasts={forecast} />
<Tabs forecasts={forecast} />
<CreditDetails photographerDetails={unsplashData} />
</div>
 </div>
 </div>
  );
}

export default App;
