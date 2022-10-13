import React from "react";

const CreditDetails = ({photographerDetails})=>{
    let name;
    let username;
    let unsplash_url
    if(!photographerDetails){
        name= ` Benjamin Davies`
        username=`bendavisual`
        unsplash_url=`https://unsplash.com/photos/Oja2ty_9ZLM`

    }
    else{
 name =photographerDetails["photographerInfo"]["name"];
username=photographerDetails["photographerInfo"]["username"];
unsplash_url=photographerDetails["unsplash_url"]["html"]
    }

   
    return (
        <div className="weatherContainer creditCaption">
        <h4>Image by:<a href={`https://unsplash.com/@${username}`}>{name}</a> </h4>
        <p>See the  image on <a href={unsplash_url}>Unsplash</a></p>

        </div>
    )
}

export default CreditDetails