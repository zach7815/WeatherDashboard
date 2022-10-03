import React, {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import CreditDetails from "./components/ImageCredit.jsx";
import SwiperFunction from "./components/DailyForecast/SwiperPagination.jsx";
import LocalDateAndTime from "./components/LocalTime.jsx";
import Tabs from "./components/TabsComponent/Tabs.jsx";
import "./styles.css"
import DummyData from "./components/DummyData.js";

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
  const [unsplashData, setUnsplashData]=useState();
  // console.log(unsplashData);

  useEffect(()=>{
   
      getLocationPromise()
    .then((res)=>{
      const {coords} =res;
      return coords;
    })
    .then( coords=>{
  
      const requestOptions = {
        method:'POST',
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify({lat:coords.latitude, lng:coords.longitude})
       }
          return requestOptions
      }
    ).then(response=>{
      let result =fetch('/api/location',response);
      return result;
    }).then(
      response=>{return response.json()})
    .then(res=> setUnsplashData(res)
    )
    .catch((error)=>{
      console.log({error:error.code, message:error.message});
    })
  }, [])





  return (
 <div className="container">
<SearchBar />
<LocalDateAndTime />
<CurrentWeather />
<SwiperFunction forecasts={fiveDayForecast} />
<Tabs forecasts={fiveDayForecast} />
<CreditDetails photographerDetails={unsplashData} />
 </div>
  );
}

export default App;
