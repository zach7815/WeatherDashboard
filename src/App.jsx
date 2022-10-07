import React, {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import CreditDetails from "./components/ImageCredit.jsx";
import SwiperFunction from "./components/DailyForecast/SwiperPagination.jsx";
import LocalDateAndTime from "./components/LocalTime.jsx";
import Tabs from "./components/TabsComponent/Tabs.jsx";
import "./styles.css"
import DummyData from "./components/DummyData.js";
import {useFetch} from "./components/useFetch.js"

let getLocationPromise = ()=>{
  return new Promise(function(resolve,reject){
    navigator.geolocation.getCurrentPosition(
      position=>resolve(position),
      error=>reject(error)
    )
  })
  }


function App() {
  const [fiveDayForecast]= useState(DummyData);
  const [currentWeather,setCurrentWeather]=useState();
  const [location, setLocation]=useState();
  const [unsplashData, setUnsplashData]=useState();
  const {loading, data, error}=useFetch('/api/location');


// requests users current location
useEffect(()=>{
  getLocationPromise()
  .then(setLocation)
},[])

//makes unsplashImage API call
useEffect(()=>{
  
  if(!location){
    console.log("position not granted");
  }
  else{
   const {latitude:lat, longitude:lng}=location["coords"];
  
   const requestOptions = {
           method:'POST',
          headers:{"Content-Type": "application/json"},
           body: JSON.stringify({lat:lat, lng:lng})
        }

        fetch('/api/unsplashImages',requestOptions)
        .then(data=>data.json())
        .then(setUnsplashData)
        .catch(error=>{console.log(error);})
   
  }
},[location]);


// handles background image setting
useEffect(()=>{
const bgImage=document.querySelector(".backgroundImg")

  if(!unsplashData){
    bgImage.style.backgroundImage='url("https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")';
  }
  else{

 bgImage.style.backgroundImage=`url(${unsplashData["refinedImageData"]["display_urls"]["full"]})`;
  }
},[unsplashData])

// requests current weather Data
useEffect(()=>{
if(!location){
  console.log("location not granted");
}
else{
  const {latitude:lat, longitude:lng}=location["coords"];
  
   const requestOptions = {
           method:'POST',
          headers:{"Content-Type": "application/json"},
           body: JSON.stringify({lat:lat, lng:lng})
        }

        fetch('/api/currentWeather',requestOptions)
        .then(data=>data.json())
        .then(setCurrentWeather)
        .catch(error=>{console.log(error);})
}
},[location])



  return (
    <div className="backgroundImg">
    <div className="imageOverlay">
 <div className="container">
<SearchBar />
<LocalDateAndTime />
<CurrentWeather currentWeather={currentWeather}/>
<SwiperFunction forecasts={fiveDayForecast} />
<Tabs forecasts={fiveDayForecast} />
<CreditDetails photographerDetails={unsplashData} />
</div>
 </div>
 </div>
  );
}

export default App;
