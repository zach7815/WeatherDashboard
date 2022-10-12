import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'



   



const SearchBar = ({setImageData})=>{
    const [query, setQuery]= useState("")

    const  handleSubmit =  async (e)=>{
        e.preventDefault();
    
        const requestOptions = {
            method:'POST',
           headers:{"Content-Type": "application/json"},
            body: JSON.stringify({city:query})
         }
    
         try{
            const response =  await fetch('/api/search', requestOptions);
            const result =  await response.json();
            const {refinedImageData}=result;
            console.log(refinedImageData);
         }
         catch(err){
            console.log(err);
         }
      
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