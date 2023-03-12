import React from "react";

const CreditDetails = ({photographerDetails})=>{
    let name;
    let username;
    let imageLink
    if(!photographerDetails){
        name= ` Benjamin Davies`
        username=`bendavisual`
        imageLink=`https://unsplash.com/photos/Oja2ty_9ZLM`

    }
    else{
       const {unsplash_url,photographerInfo}= photographerDetails||""
 name =!photographerInfo?"not available":photographerInfo["name"];
username=!photographerInfo?"not available":photographerInfo["username"];
 imageLink=!unsplash_url?"null":unsplash_url["html"];
    }


    return (
        <div className="weatherContainer creditCaption">
        <h4>Image by: <a href={`https://unsplash.com/@${username}`}>{name}</a> </h4>
        <p>See the  image on <a href={imageLink}>Unsplash</a></p>

        </div>
    )
}

export default CreditDetails