import React, { useState } from "react";

import "./Content.css";
import TabsBar from "./components/TabsBar";
import RequestInput from "./components/RequestInput";
import RequestOptionsMenu from "./components/RequestOptionsMenu";
import RequestOptions from "./components/RequestOptions";
import Response from "./components/Response";
import { sendRequest } from "../../actions/actions";

const Content = () => {
  const [tabs, setTabs] = useState([
    {
      name: "Get Sentiment Levels",
      type: "GET",
      _id: Math.random(0, 10) * 10,
      URL: "",
      response: "hello",
    },
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
  const [URL, setURL] = useState("");

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
      {
        name: "Untitled Request",
        type: "GET",
        _id: Math.random(0, 10) * 10,
        URL: "",
        response: "google",
      },
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

  const handleURLChange = (e) => {
    const tempTabs = tabs;
    tempTabs[tabIndex].URL = e.target.value;
    setTabs(tempTabs);
  };

  const handleSubmit = () => {
    sendRequest("GET", tabs[tabIndex].URL, {}, {})
      .then((res) => {
        if (res.status === 200) {
          const tempTabs = tabs;
          tempTabs[tabIndex].response = res.data;
          setTabs(tempTabs);
          console.log(tabs[tabIndex]);
        }
      })
      .catch((err) => {
        const tempTabs = tabs;
        tempTabs[tabIndex].response = err;
        setTabs(tempTabs);
      });
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
      <RequestInput
        tab={tabs[tabIndex]}
        handleChange={handleURLChange}
        handleSubmit={handleSubmit}
      />
      {/* Request Options Menu */}
      <RequestOptionsMenu
        tabs={requestTabs}
        tabIndex={requestsTabIndex}
        handleTabChange={(index) => handleRequestTabChange(index)}
      />
      <RequestOptions tabIndex={requestsTabIndex} />
      <Response tab={tabs[tabIndex]} />
    </div>
  );
};
export default Content;
