import express from 'express'
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
const openWeatherKey=process.env.OPEN_WEATHER_KEY;

const randomNumber = (max)=>{
    return Math.round(Math.random()*max)
}


app.use(express.json())



app.post("/api/unsplashImages", (req,res)=>{
      
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
       
       return randomPhoto;
    }).then(
        (imageMetaData=>{
           const {alt_description, links, urls, user }= imageMetaData

            const refinedImageData= {
                description:alt_description,
                unsplash_url:links,
                display_urls:urls, 
                photographerInfo:user
            }
            res.json({refinedImageData})
          
        })
    ).catch(
        (error)=>{
            console.log(Error(error.stack));
        }
    )
   

})

app.post("/api/currentWeather",async (req,res)=>{

    let    lat=req.body.lat;
    let  lng=req.body.lng;
const URL=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${openWeatherKey}`
const response= await nodeFetch(URL);
const result= await response.json();
const {weather,main, wind, sys, name}= result;

const currentWeather={
    weather:weather,
    temperature:main,
    wind:wind,
    dayLength:sys,
    location:name,
}

res.json({currentWeather})

})

app.post("/api/fiveDayWeather",(req,res)=>{


})


app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`)
});