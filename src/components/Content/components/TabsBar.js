import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faCog,
  faTimes,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const TabsBar = (props) => {
  const {
    tabs,
    tabIndex,
    handleTabChange,
    handleNewTab,
    handleRemoveTab,
  } = props;

  return (
    <div>
      {/* Tabs Bar */}
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
                      onClick={() => handleRemoveTab(tab)}
                      className="content__requestTabCloseIcon"
                    />
                  </div>
                );
              })}
              <div
                className="content__requestTab"
                id="content__requestTabAddTab"
                onClick={handleNewTab}
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

export default TabsBar;
// Prop Types
TabsBar.propTypes = {
  tabs: PropTypes.array.isRequired,
  tabIndex: PropTypes.number.isRequired,
  handleTabChange: PropTypes.func.isRequired,
  handleNewTab: PropTypes.func.isRequired,
  handleRemoveTab: PropTypes.func.isRequired,
};
