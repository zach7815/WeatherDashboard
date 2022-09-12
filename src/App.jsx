import React from "react";
import SearchBar from "./components/SearchBar.jsx";
import CurrentWeather from "./components/CurrentWeather.jsx";
import FiveDayForecast from "./components/FiveDayWeather.jsx";
import ButtonContainer from "./components/ButtonContainer.jsx";
import "./styles.css"
import CreditDetails from "./components/ImageCredit.jsx";


function App() {
  return (
 <div className="container">
<SearchBar />
<CurrentWeather />
<FiveDayForecast />
<ButtonContainer />
<CreditDetails />
 </div>
  );
}

export default App;
