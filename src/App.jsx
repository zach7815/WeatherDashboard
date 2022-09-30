import React, {useState} from "react";
import SearchBar from "./components/SearchBar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import CreditDetails from "./components/ImageCredit.jsx";
import SwiperFunction from "./components/DailyForecast/SwiperPagination.jsx";
import LocalDateAndTime from "./components/LocalTime.jsx";
import Tabs from "./components/TabsComponent/Tabs.jsx";
import "./styles.css"
import DummyData from "./components/DummyData.js";








function App() {
  
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
