import React, {useState, useEffect} from "react";
import SearchBar from "./components/SearchBar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import CreditDetails from "./components/ImageCredit.jsx";
import SwiperFunction from "./components/DailyForecast/SwiperPagination.jsx";
import LocalDateAndTime from "./components/LocalTime.jsx";
import Tabs from "./components/TabsComponent/Tabs.jsx";
import "./styles.css"
import DummyData from "./components/DummyData.js";
import {getLocationData} from "./components/locationScripts.js";








function App() {
  const [fiveDayForecast]= useState(DummyData);
  const [unsplashData, setUnsplashData]=useState({ });

  useEffect(()=>{
const unsplashInfo=getLocationData()
setUnsplashData(unsplashInfo);
console.log(unsplashData);
  }, [unsplashData])





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
