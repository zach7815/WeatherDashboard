import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./styles.css";






let getLocationPromise = ()=>{
return new Promise(function(resolve,reject){
  navigator.geolocation.getCurrentPosition(
    position=>resolve(position),
    error=>reject(error)
  )
})
}

const getLocation =  ()=>{
    getLocationPromise()
  .then((res)=>{
    const {coords} =res
    console.log(coords);
    return coords
  })
  .then( async coords=>{

    const requestOptions = {
      method:'POST',
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({lat:coords.latitude, lng:coords.longitude})
     }

     const response = await fetch('/api/location',requestOptions);
     const result =await response.json();
     console.log(result);
    }
  )
  .catch((error)=>{
    console.log({error:error.code, message:error.message});
  })
}

getLocation();



   
     



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
