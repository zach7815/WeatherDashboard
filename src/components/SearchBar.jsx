import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'




const SearchBar = ()=>{
    return (
        <div className="searchBarContainer">
        <form className="searchInput" method="POST" >
        <input type="search" className="searchBar" placeholder="Find Your City's Weather"></input>
        <button type="submit" className="searchButton"><FontAwesomeIcon icon={faMagnifyingGlass}  disabled /></button>
        </form>
        </div>
       
      
    )
};


<i class="fa-solid fa-magnifying-glass"></i>
export default SearchBar