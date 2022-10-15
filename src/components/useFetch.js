import {useEffect } from "react";

// '/api/unsplashImages',



const useFetch= async (location, url, setFunction)=>{
    console.log(location)
    useEffect(()=>{
     

        if(!location){
            console.log("location not granted");
        }
        else{
            const {latitude:lat, longitude:lng}=location["coords"];
            const requestOptions = {
                method:'POST',
               headers:{"Content-Type": "application/json"},
                body: JSON.stringify({lat:lat, lng:lng})
             }


                fetch(url,requestOptions)
                .then(data=>data.json())
                .then(setFunction)
                .catch(error=>console.log(Error(error)));
        }  
    },[location, url, setFunction])
    
}

export default useFetch