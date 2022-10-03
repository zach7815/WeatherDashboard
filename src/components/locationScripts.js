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
      .then(res=> res
      )
      .catch((error)=>{
        console.log({error:error.code, message:error.message});
      })
    }


