import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



const SearchBar = ({setWeatherData, setForecastData, setImageData})=>{
    const [query, setQuery]= useState("")

    const  handleSubmit =  async (e)=>{
        e.preventDefault();
    
        const requestOptions = {
            method:'POST',
            mode:'cors',
           headers:{"Content-Type": "application/json"},
            body: JSON.stringify({city:query})
         }

    if (!query){
        alert("please enter a city");
    }
    else{
        try{
            const response =  await fetch('https://weather-dashboard-backend.onrender.com/api/search', requestOptions);
            const result =  await response.json();
           if(result[1]===null){
            alert("city not recognised, please enter a valid city")
           }
           else{
            setImageData(result[0]);
            setWeatherData(result[1]);
            setForecastData(result[2]);
           }
         }
         catch(err){
            console.log(err);
         }
    }
        
      setQuery("")
       }
  

    return (
        <div className="searchBarContainer">
        <form className="searchInput" onSubmit={handleSubmit} >
        <input type="search" className="searchBar" placeholder="Find Your City's Weather" onChange={(e)=>setQuery(e.target.value)} value={query} />
        <button type="submit" className="searchButton"><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
        </form>
        </div>
    )
};


<i class="fa-solid fa-magnifying-glass"></i>
export default SearchBar
