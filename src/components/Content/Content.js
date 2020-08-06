import React, { useState } from "react";

import "./Content.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCog,
  faTimes,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const Content = () => {
  const [tabs, setTabs] = useState([
    { name: "Get Sentiment Levels", type: "GET", _id: Math.random(0, 10) * 10 },
  ]);
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  const addNewTab = () => {
    setTabs([
      ...tabs,
      { name: "Untitled Request", type: "GET", _id: Math.random(0, 10) * 10 },
    ]);
    setTabIndex(tabs.length);
  };

  const removeTab = (tabToRemove) => {
    var tempTabs = tabs.filter((tab) => {
      return tab._id !== tabToRemove._id;
    });
    setTabs(tempTabs);
  };
  return (
    <div className="content">
      <div className="content__tabBar">
        <div className="content__tabBarRow">
          <div className="content__tabBarColumn" id="content__tabBarTabs">
            <div className="content__tabsRow">
              {/* Tabs */}
              {tabs.map((tab, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      handleTabChange(index);
                    }}
                    className={
                      index === tabIndex
                        ? "content__requestTab active"
                        : "content__requestTab "
                    }
                  >
                    <span className="content__requestType">{tab.type}</span>
                    {tab.name}
                    <FontAwesomeIcon
                      icon={faTimes}
                      onClick={() => removeTab(tab)}
                      className="content__requestTabCloseIcon"
                    />
                  </div>
                );
              })}
              <div
                className="content__requestTab"
                id="content__requestTabAddTab"
                onClick={addNewTab}
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </div>
          </div>
          <div className="content__tabBarColumn content__tabBarOptionsWrapper">
            <input value="DEV" className="content__tabBarSelect" />
            <button className="content__button">
              <FontAwesomeIcon icon={faEye} />
            </button>
            <button className="content__button">
              <FontAwesomeIcon icon={faCog} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Content;
