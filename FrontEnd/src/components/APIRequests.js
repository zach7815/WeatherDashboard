import {useEffect } from "react";


export  function getLocationPromise(){
    return new Promise(function(resolve,reject){
      navigator.geolocation.getCurrentPosition(
        position=>resolve(position),
        error=>reject(error)
      )
    })
    }

export  function CallAPIs(urlsArray, setFuncArray,
 locationFunction, location){

useEffect(()=>{
    setFuncArray[0](true);
    locationFunction()
    //setLocation
    .then(setFuncArray[1](location))
    .then(location=>{
        const {latitude:lat, longitude:lng}=location["coords"];
        const requestOptions = {
            method:'POST',
             mode:'cors',
           headers:{"Content-Type": "application/json"},
            body: JSON.stringify({lat:lat, lng:lng})
         }

         Promise.all([
            fetch(urlsArray[0],requestOptions),
            fetch(urlsArray[1],requestOptions),
            fetch(urlsArray[2],requestOptions),
        ])
        .then((results)=>{
            return Promise.all(results.map(r=>r.json()))
            })
            .then((dataArray)=>{
                console.log(setFuncArray)
               setFuncArray[2](dataArray[0]);
               setFuncArray[3](dataArray[1]);
               setFuncArray[4](dataArray[2]);
               setFuncArray[0](false)
            }).catch(error=>{console.log(error)})


    })
},[location,
    locationFunction,
    JSON.stringify(urlsArray),
    JSON.stringify(setFuncArray)])

}


