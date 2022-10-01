import React from "react";

const CreditDetails = ({photographerDetails})=>{
    console.log(photographerDetails);
    return (
        <div className="weatherContainer creditCaption">
        <h4>Image by:<a href="www.unsplash.com">Author Name</a> </h4>
        <p>See the  image on <a href="www.unsplash.com">Unsplash</a></p>

        </div>
    )
}

export default CreditDetails