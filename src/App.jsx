import React, {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import CreditDetails from "./components/ImageCredit.jsx";
import SwiperFunction from "./components/DailyForecast/SwiperPagination.jsx";
import LocalDateAndTime from "./components/LocalTime.jsx";
import Tabs from "./components/TabsComponent/Tabs.jsx";
import "./styles.css"
import DummyData from "./components/DummyData.js";








function App() {
  useEffect(()=>{
    let coordinates
    document.addEventListener("DOMContentLoaded", ()=>{
      navigator.geolocation.getCurrentPosition((position)=>{
        let latitude =position.coords.latitude;
       let  longitude=position.coords.longitude;
        coordinates = {latitude, longitude}
        console.log(` Coordinates inside event listener ${JSON.stringify(coordinates)}`);
      return coordinates
      })
    })
   
    
    console.log(` coordinates logged outside event listener ${coordinates}`)

    const requestOptions = {
      method:'POST',
      mode:"cors",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify(coordinates)
     }
   
     
fetch('/api/location', requestOptions)
 },[])


  

  const [fiveDayForecast]= useState(DummyData)

  return (
 <div className="container">
<SearchBar />
<LocalDateAndTime />
<CurrentWeather />
<SwiperFunction forecasts={fiveDayForecast} />
<Tabs forecasts={fiveDayForecast} />
<CreditDetails />
 </div>
  );
}

export default App;
