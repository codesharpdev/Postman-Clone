import React, { useState } from "react";

import "./Content.css";
import TabsBar from "./components/TabsBar";
import RequestInput from "./components/RequestInput";
import RequestOptionsMenu from "./components/RequestOptionsMenu";
import RequestOptions from "./components/RequestOptions";
import Response from "./components/Response";

const Content = () => {
  const [tabs, setTabs] = useState([
    { name: "Get Sentiment Levels", type: "GET", _id: Math.random(0, 10) * 10 },
  ]);
  const [requestTabs] = useState([
    "Params",
    "Authorization",
    "Headers",
    "Body",
    "Pre-request Script",
    "Tests",
    "Settings",
  ]);
  const [tabIndex, setTabIndex] = useState(0);
  const [requestsTabIndex, setRequestsTabIndex] = useState(0);

  //   Change the current tab
  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  const handleRequestTabChange = (index) => {
    setRequestsTabIndex(index);
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
      {/* Tabs Bar */}
      <TabsBar
        tabs={tabs}
        tabIndex={tabIndex}
        handleTabChange={handleTabChange}
        handleNewTab={addNewTab}
        handleRemoveTab={removeTab}
      />
      {/* Request Input */}
      <RequestInput tab={tabs[tabIndex]} />
      {/* Request Options Menu */}
      <RequestOptionsMenu
        tabs={requestTabs}
        tabIndex={requestsTabIndex}
        handleTabChange={(index) => handleRequestTabChange(index)}
      />
      <RequestOptions tabIndex={requestsTabIndex} />
      <Response />
    </div>
  );
};
export default Content;
