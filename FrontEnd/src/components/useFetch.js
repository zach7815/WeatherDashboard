import {useEffect } from "react";


const useFetch= async (location, url, setFunction)=>{
 console.log(url);
    useEffect(()=>{
     

        if(!location){
            console.log("location not granted");
        }
        else{
            const {latitude:lat, longitude:lng}=location["coords"];
            const requestOptions = {
                method:'POST',
                 mode:'cors',
               headers:{"Content-Type": "application/json"},
                body: JSON.stringify({lat:lat, lng:lng})
             }


                fetch(url,requestOptions)
                .then(data=>{
                    console.log(data);
                    if(data===null||undefined){
                        return
                    }
                    else{
                        let result= data.json()
                        console.log(result)
                        return result
                    }
                    })
                .then(setFunction)
                .catch(error=>console.log(Error(error)));
        }  
    },[location, url, setFunction])
    
}

export default useFetch
