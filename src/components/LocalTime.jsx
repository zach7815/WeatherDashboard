import React, { useEffect, useRef } from "react";
import doDate from "../LocalTime";
let date = doDate();



const LocalDateAndTime = ()=>{
const timeRef= useRef(null);

useEffect(()=>{
    const setTime= setInterval(()=>{ 
        if(timeRef){
            timeRef.current.innerText=new Date().toLocaleTimeString();
        }
    },1000)
    return ()=>clearInterval(setTime);
},[])


    return(
        <div className="weatherContainer currentTime">
        <h2> Your Local Time</h2>
        <h2 ref={timeRef}>time</h2>
        <h3>{date}</h3>
        </div>
    )
};

export default LocalDateAndTime;