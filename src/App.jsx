import React from "react";
import SearchBar from "./components/SearchBar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import CreditDetails from "./components/ImageCredit.jsx";
import SwiperFunction from "./components/SwiperPagination.jsx";
import "./styles.css"


function App() {
  return (
 <div className="container">
<SearchBar />
<CurrentWeather />
<SwiperFunction />
<CreditDetails />
 </div>
  );
}

export default App;
