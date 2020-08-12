import React, { useState } from "react";
import "./Sidebar.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCaretRight,
  faFolder,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [tabs] = useState(["History", "Collections", "APIs"]);
  const [tabIndex, setTabIndex] = useState(1);

  const handleTabChange = (index) => {
    setTabIndex(index);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__searchBarWrapper">
        <input
          type="text"
          placeholder="Filter"
          className="sidebar__searchBar"
        />
        <div className="sidebar__menu">
          {tabs.map((tab, index) => {
            return (
              <span
                onClick={() => handleTabChange(index)}
                className={
                  index === tabIndex
                    ? "sidebar__menuOptions active"
                    : "sidebar__menuOptions"
                }
              >
                {tab}
              </span>
            );
          })}
        </div>
        <div className="sidebar__row">
          <div className="sidebar__column">
            <span className="sidebar__newCollectionLink">
              <FontAwesomeIcon icon={faPlus} /> New Collection
            </span>
            <span className="sidebar__trashLink">Trash</span>
          </div>
        </div>
        {/* Collections List */}
        <div className="sidebar__collectionList">
          {collections.map((collection, index) => {
            return (
              <div className="sidebar__collection">
                <div className="sidebar__collectionRow">
                  <div className="sidebar__collectionColumn">
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="sidebar__icons"
                    />
                    <FontAwesomeIcon
                      icon={faFolder}
                      className="sidebar__icons"
                    />
                  </div>
                  <div className="sidebar__collectionColumn">
                    <span>{collection.name}</span>
                    <p className="sidebar__collectionRequests">
                      {collection.requestsCount} Requests
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default Sidebar;

// Data
const collections = [
  {
    name: "Merumart",
    requestsCount: 59,
  },
  {
    name: "SIH 2020",
    requestsCount: 20,
  },
  {
    name: "Tweezy",
    requestsCount: 30,
  },
];
