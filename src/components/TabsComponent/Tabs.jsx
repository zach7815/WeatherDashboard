import React, { useState } from "react";
import TabNavItem from "./AllTabs/TabNavItem";
import TabContent from "./AllTabs/TabContent";
import "./tabs.css"
import FiveDayForecast from "../DailyForecast/FiveDayWeather";



const day=[
{id:1, day:"Today", tabId:"tab1"},
{id:2, day:"Tuesday", tabId:"tab2"},
{id:3, day:"Wednesday", tabId:"tab3"},
{id:4, day:"Thursday",tabId:"tab4"}, 
{id:5, day: "Friday",tabId:"tab5"}
]


const Tabs = ({forecasts}) => {
  
  const [activeTab, setActiveTab] = useState("tab1");
if(!forecasts){
  return
}

else
console.log(forecasts["day"])
  return (
    <>
        <ul className="nav">
        <TabNavItem
          title={forecasts[0]["day"]}
          className="tab" id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title={forecasts[1]["day"]}
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title={forecasts[2]["day"]}
           id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <TabNavItem
          title={forecasts[3]["day"]}
           id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
            <TabNavItem
          title={forecasts[4]["day"]}
          id="tab5"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </ul>
    
    <div className="Tabs weatherContainer">

      <div className="outlet">
      {forecasts.map((forecast,index)=>{
       
        return(
        <TabContent className="tab"  key={day[index].id} id={day[index].tabId} activeTab={activeTab}>
         <FiveDayForecast day={forecast["day"]} forecast={forecast} />
        </TabContent>
        )

      })}
      </div>
    </div>
    </>
  );
    
};

export default Tabs;
