import express from 'express';
import * as dotenv from 'dotenv';
import nodeFetch from 'node-fetch';
import { createApi } from 'unsplash-js';
import openCage from 'opencage-api-client';
dotenv.config();
const app = express();
app.use(express.static('public'));
app.use(express.json({limit:'1mb'}));
app.use(express.json());

const PORT= 8000;
const openCageKey= process.env.OPENCAGE_API_KEY;
const unSplashAccessKey=process.env.UNSPLASH_ACESS_KEY;
const openWeatherKey=process.env.OPEN_WEATHER_KEY;


const getImage= async (location)=>{
   try{
    const api= await createApi({
        accessKey:unSplashAccessKey,
        fetch:nodeFetch
    })
   const photoList= await api.search.getPhotos(
    {query:location.city,
         page:1, perPage:10, 
         orderBy:"relevant", 
         orientation:"landscape"
        });
  
        const {response}= photoList;
        const results= response.results;
        const randomPhotoInfo= results[randomNumber(10)]
        const {alt_description, links, urls, user }= randomPhotoInfo;
          const refinedImageData= {
            description:alt_description||"not available",
            unsplash_url:links,
            display_urls:urls, 
            photographerInfo:user
        };
        return refinedImageData;
    }
    catch(err){
        console.log(err)
    }
}



const randomNumber = (max)=>{
    return Math.round(Math.random()*max)
};




app.post("/api/search", async (req,res)=>{
const location= req.body;
console.log(location)
const photoInfo= await getImage(location);
res.json({refinedImageData:photoInfo})
res.end()

})

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
   
    .catch(
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
res.end()
})

app.post("/api/fiveDayForecast",async(req,res)=>{
    let    lat=req.body.lat;
    let  lng=req.body.lng;
const URL=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=${openWeatherKey}`
const response= await nodeFetch(URL);
const result= await response.json();
const {list}=result;
const day= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

const tempArray = list.map(object=>object["main"]["temp"]);
const humidityArray= list.map(object=>object["main"]["humidity"]);
const iconArray =  list.map(object=>object["weather"][0]["icon"]);
const weatherDescrp = list.map(object=>object["weather"][0]["description"]);
const dayIndex = [...new Set(list.map(object=> day[new Date(object["dt_txt"].slice(0, 11)).getDay()]))];
const time =  list.map(object=> object["dt_txt"].slice(11));


const daysArray = [];
for (let i=0; i<5; i++){
  daysArray.push({
    times:time.splice(0,5),
    day:dayIndex.splice(0,1),
    weatherIcons:iconArray.splice(0,5),
    Description:weatherDescrp.splice(0,5),
    temperature:tempArray.splice(0,5),
    humidity:humidityArray.splice(0,5)
}) ;  
};
res.json(daysArray);
res.end();

})


app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`)
});