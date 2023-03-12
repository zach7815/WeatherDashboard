import React, {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import CreditDetails from "./components/ImageCredit.jsx";
import SwiperFunction from "./components/DailyForecast/SwiperPagination.jsx";
import LocalDateAndTime from "./components/LocalTime.jsx";
import Tabs from "./components/TabsComponent/Tabs.jsx";
import "./styles.css"
import { getLocationPromise, CallAPIs } from "./components/APIRequests.js";



function App() {
  const [forecast, setForecast]= useState();
  const [currentWeather,setCurrentWeather]=useState();
  const [location, setLocation]=useState();
  const [unsplashData, setUnsplashData]=useState();
  const [loading,setLoading]=useState(false)

const urlArray=["https://weather-dashboard-backend.onrender.com/api/currentWeather",
                "https://weather-dashboard-backend.onrender.com/api/unsplashImages",
                "https://weather-dashboard-backend.onrender.com/api/fiveDayForecast"
              ]
   const setFunctArray=[setLoading, setLocation, setCurrentWeather,setUnsplashData,setForecast]


CallAPIs(urlArray, setFunctArray, getLocationPromise, location )




useEffect(()=>{
const bgImage=document.querySelector(".backgroundImg")

  if(!unsplashData){
return
  }
  else{
 bgImage.style.backgroundImage=`url(${unsplashData["display_urls"]["full"]})`;
  }
},[unsplashData])

if(loading===true){
  return(
    <div className="loader-container">
    <div className="spinner"></div>
  </div>
  )
}
else{

  return (
    <>
    {loading?(<div className="loader-container">
      	  <div className="spinner"></div>
        </div>):(
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

        )}



 </>
  );
}
}

export default App;
