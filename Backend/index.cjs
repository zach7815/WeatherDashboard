require('dotenv').config()
const express =require("express")
const app = express();
const opencage = require('opencage-api-client');
const PORT= 8000;

const openCageKey= process.env.OPENCAGE_API_KEY

let geoData=""

opencage.geocode({q:'37.4396, -122.1864', key:openCageKey, language:"En"})
    .then((data)=>{
        geoData=JSON.stringify(data)
        console.log(geoData);

    })




app.use(express.json())

app.get("/hello", (req,res)=>{
    res.send("hello")
})

app.post("/api/location", (req,res)=>{
    res.status(200).send(geoData);

    


})


app.listen(PORT, ()=>{
    console.log(`listening on port: ${PORT}`)
});