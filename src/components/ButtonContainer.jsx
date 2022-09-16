import React from "react";
import DayButton from "./DayButton";

const ButtonContainer = ()=>{
    return (
        <div className="buttonContainer">
        <DayButton day="Today"/>
        <DayButton day="Monday"/>
        <DayButton day="Tuesday"/>
        <DayButton day="Wednesday"/>
        <DayButton day="Thursday"/>
        </div>
    )
}

export default ButtonContainer;