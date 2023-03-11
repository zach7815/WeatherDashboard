import React, {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import CreditDetails from "./components/ImageCredit.jsx";
import SwiperFunction from "./components/DailyForecast/SwiperPagination.jsx";
import LocalDateAndTime from "./components/LocalTime.jsx";
import Tabs from "./components/TabsComponent/Tabs.jsx";
import "./styles.css"
// import useFetch from "./components/useFetch.js";
// import FiveDayForecast from "./components/DailyForecast/FiveDayWeather.jsx";







function App() {
  const [forecast, setForecast]= useState();
  const [currentWeather,setCurrentWeather]=useState();
  const [location, setLocation]=useState();
  const [unsplashData, setUnsplashData]=useState();
  const [loading,setLoading]=useState(false)


  const getLocationPromise = ()=>{
    return new Promise(function(resolve,reject){
      navigator.geolocation.getCurrentPosition(
        position=>resolve(position),
        error=>reject(error)
      )
    })
    }




// requests users current location
useEffect(()=>{
  setLoading(true)
  getLocationPromise()
  .then(setLocation(location))
  .then((location)=>{
    const {latitude:lat, longitude:lng}=location["coords"];
    const requestOptions = {
        method:'POST',
         mode:'cors',
       headers:{"Content-Type": "application/json"},
        body: JSON.stringify({lat:lat, lng:lng})
     }
     Promise.all([
      fetch("https://weather-dashboard-backend.onrender.com/api/currentWeather",requestOptions),
      fetch("https://weather-dashboard-backend.onrender.com/api/unsplashImages",requestOptions),
      fetch("https://weather-dashboard-backend.onrender.com/api/fiveDayForecast",requestOptions),
       ])
     .then((results)=>{
     return Promise.all(results.map(r=>r.json()))
     })
     .then((dataArray)=>{
        setCurrentWeather(dataArray[0]);
        setUnsplashData(dataArray[1]);
        setForecast(dataArray[2]);
        setLoading(false);
     }).catch(error=>{console.log(error)})
})
},[location])


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
