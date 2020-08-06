import React, { useState } from "react";

import "./Content.css";
import TabsBar from "./components/TabsBar";

const Content = () => {
  const [tabs, setTabs] = useState([
    { name: "Get Sentiment Levels", type: "GET", _id: Math.random(0, 10) * 10 },
  ]);
  const [tabIndex, setTabIndex] = useState(0);

  //   Change the current tab
  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  //  Adds a new request tab
  const addNewTab = () => {
    if (tabs.length >= 3) {
      alert("Close the previous tabs.. ! We will implement more tabs soon..");
      return;
    }
    setTabs([
      ...tabs,
      { name: "Untitled Request", type: "GET", _id: Math.random(0, 10) * 10 },
    ]);
    setTabIndex(tabs.length);
  };

  //  Removes a request tab
  const removeTab = (tabToRemove) => {
    var tempTabs = tabs.filter((tab) => {
      return tab._id !== tabToRemove._id;
    });
    setTabs(tempTabs);
  };

  return (
    <div className="content">
      <TabsBar
        tabs={tabs}
        tabIndex={tabIndex}
        handleTabChange={handleTabChange}
        handleNewTab={addNewTab}
        handleRemoveTab={removeTab}
      />
    </div>
  );
};
export default Content;
