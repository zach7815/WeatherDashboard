import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";

let latitude="";
let longitude="";
navigator.geolocation.getCurrentPosition((position)=>{
   latitude =position.coords.latitude;
   longitude=position.coords.longitude;
   console.log(latitude);
console.log(longitude);
})




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


