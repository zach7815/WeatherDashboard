require('dotenv').config()
const express =require("express")
const app = express();
app.use(express.static('public'))
app.use(express.json({limit:'1mb'}));
const opencage = require('opencage-api-client');
const PORT= 8000;
const openCageKey= process.env.OPENCAGE_API_KEY

// let lat;
// let lng;

// let geoData=`${lat},${lng}`

// opencage.geocode({q:geoData, key:openCageKey, language:"En"})
//     .then((data)=>{
//         geoData=JSON.stringify(data)

//     })




app.use(express.json())

app.get("/api/coordinates", (req,res)=>{

})

app.post("/api/location", (req,res)=>{
    const lat = req.body.lat;
    const lng=req.body.lng;
    
        console.log(lat, lng);
    
res.end();

})


app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`)
});