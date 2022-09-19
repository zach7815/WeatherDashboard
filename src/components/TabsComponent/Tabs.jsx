import React, { useState, useRef } from "react";
import TabNavItem from "./AllTabs/TabNavItem";
import TabContent from "./AllTabs/TabContent";
import "./tabs.css"
import FiveDayForecast from "../DailyForecast/FiveDayWeather";
import DummyData from "../DummyData";


const day=[
{id:1, day:"Today", tabId:"tab1"},
{id:2, day:"Tuesday", tabId:"tab2"},
{id:3, day:"Wednesday", tabId:"tab3"},
{id:4, day:"Thursday",tabId:"tab4"}, 
{id:5, day: "Friday",tabId:"tab5"}

]


const Tabs = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  const [dummyData]=useState(DummyData);
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
      {day.map((dayInfo, index)=>{
        return(
        <TabContent className="tab"  key={dayInfo.id} id={dayInfo.tabId} activeTab={activeTab}>
         <FiveDayForecast day={dayInfo.day} dayData={dummyData}/>
        </TabContent>
        )

      })}
      </div>
    </div>
    </>
  );
};

export default Tabs;
