import React from "react";
import SearchBar from "./components/SearchBar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import CreditDetails from "./components/ImageCredit.jsx";
import SwiperFunction from "./components/DailyForecast/SwiperPagination.jsx";
import LocalDateAndTime from "./components/LocalTime.jsx";
import Tabs from "./components/TabsComponent/Tabs.jsx";
import "./styles.css"



function App() {
  return (
 <div className="container">
<SearchBar />
<LocalDateAndTime />
<CurrentWeather />
<SwiperFunction />
<Tabs />
<CreditDetails />
 </div>
  );
}

export default App;
