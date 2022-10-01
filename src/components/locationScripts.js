let getLocationPromise = ()=>{
    return new Promise(function(resolve,reject){
      navigator.geolocation.getCurrentPosition(
        position=>resolve(position),
        error=>reject(error)
      )
    })
    }

    const getLocationData=()=>{
        getLocationPromise()
      .then((res)=>{
        const {coords} =res;
        return coords;
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
         return result;
        }
      )
      .catch((error)=>{
        console.log({error:error.code, message:error.message});
      })
    }

    export {getLocationData};