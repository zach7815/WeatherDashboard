import React, { useState } from "react";
import TabNavItem from "./AllTabs/TabNavItem";
import TabContent from "./AllTabs/TabContent";
import "./tabs.css"
import FiveDayForecast from "../DailyForecast/FiveDayWeather";
import DummyData from "../DummyData";

const [Days]=DummyData


const Tabs = () => {
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
        <TabContent className="tab" id="tab1" activeTab={activeTab}>
         <FiveDayForecast day="Today" {...Days}  />
        </TabContent>
        <TabContent className="tab" id="tab2" activeTab={activeTab}>
        <FiveDayForecast day="Monday" {...Days} />
        </TabContent>
        <TabContent className="tab" id="tab3" activeTab={activeTab}>
        <FiveDayForecast day="Wednesday" {...Days} />
        </TabContent>
        <TabContent className="tab" id="tab4" activeTab={activeTab}>
        <FiveDayForecast day="Thursday" {...Days}/>
        </TabContent>
        <TabContent className="tab" id="tab5" activeTab={activeTab}>
        <FiveDayForecast day="Friday" {...Days} />
        </TabContent>
      </div>
    </div>
    </>
  );
};

export default Tabs;
