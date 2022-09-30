import express, { response } from 'express'
import * as dotenv from 'dotenv' 
import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';
import openCage from 'opencage-api-client';
dotenv.config()
const app = express();
app.use(express.static('public'))
app.use(express.json({limit:'1mb'}));
const PORT= 8000;
const openCageKey= process.env.OPENCAGE_API_KEY;
const unSplashAccessKey=process.env.UNSPLASH_ACESS_KEY;

const randomNumber = (max)=>{
    return Math.round(Math.random()*max)
}



let geoData;

openCage.geocode({q:'37.4396, -122.1864', key:openCageKey, language:"En"})
    .then((data)=>{
      const {results}=data;
   geoData=results
    })
  






app.use(express.json())

app.get("/api/coordinates", (req,res)=>{
 
    res.status(200).send(geoData)
    

})

app.post("/api/location", (req,res)=>{
      
    let    lat=req.body.lat;
    let  lng=req.body.lng;
        let geoData=`${lat},${lng}`

openCage.geocode({q:geoData, key:openCageKey, language:"En"})
    .then((data)=>{
        const {results} =data;
       const components= results[0]["components"];
        let location={
        timezone:results[0]["annotations"]["timezone"]["name"],
        }
        if(components.hasOwnProperty("city")){
            location.city= components["city"] 

        }
        else if(components.hasOwnProperty("town")){
            location.town= components["town"] 
        }
        else{
            location.country=components["country"] 
        }
            
        return location

    })
    .then(object=>{
    const api=createApi({
        accessKey:unSplashAccessKey,
        fetch:nodeFetch
    })
   let photoList= api.search.getPhotos({query:object.city, page:1, perPage:10, orderBy:"relevant", orientation:"landscape"});
   return photoList 
    })
    .then(unsplashResults=>{
       const {response} =unsplashResults;
       let photoList= response.results;
       let randomPhoto= photoList[randomNumber(10)];
       console.log(randomPhoto);
       return randomPhoto;
    }).then(
        (imageMetaData=>{
            console.log(imageMetaData);
          res.json({data:imageMetaData})
        })
    ).catch(
        (error)=>{
            console.log(Error(error.stack));
        }
    )
   

})





app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`)
});