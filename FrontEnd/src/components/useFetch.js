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
                 mode:'no-cors',
               headers:{"Content-Type": "application/json"},
                body: JSON.stringify({lat:lat, lng:lng})
             }


                fetch(url,requestOptions)
                .then(data=>{
                    if(data===null||undefined){
                        return
                    }
                    else{
                        return data.json()
                    }
                    })
                .then(setFunction)
                .catch(error=>console.log(Error(error)));
        }  
    },[location, url, setFunction])
    
}

export default useFetch
