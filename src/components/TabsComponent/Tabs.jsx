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
  
  return (
    <>
        <ul className="nav">
        <TabNavItem
          title="Today"
          className="tab" id="tab1"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Monday"
          id="tab2"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <TabNavItem
          title="Tuesday"
           id="tab3"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <TabNavItem
          title="Wednesday"
           id="tab4"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
            <TabNavItem
          title="Thursday"
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
         <FiveDayForecast day={day[index].day} forecast={forecast}/>
        </TabContent>
        )

      })}
      </div>
    </div>
    </>
  );
};

export default Tabs;
