import React from "react";
import "./Header.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlusSquare,
  faFileImport,
  faThLarge,
  faChevronDown,
  faUserPlus,
  faSyncAlt,
  faSatelliteDish,
  faWrench,
  faBell,
  faHeart,
  faMicrochip,
} from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="header__row">
        {/* Left Side Buttons */}
        <div className="header__column">
          <button className="header__newButton">
            <FontAwesomeIcon icon={faPlusSquare} className="icon" />
            New
          </button>
          <button className="header__button">Import</button>
          <button className="header__button">Runner</button>
          <button className="header__button">
            <FontAwesomeIcon icon={faFileImport} className="icon" />
          </button>
        </div>
        {/* Center Content */}
        <div className="header__column">
          <div className="header__titleWrapper">
            <FontAwesomeIcon icon={faThLarge} id="header__titleIcon" />
            <span className="header__titleText">My workspace</span>
            <FontAwesomeIcon
              icon={faChevronDown}
              className="header_titleDropDownIcon"
            />
            <button className="header__button" id="header__inviteButton">
              <FontAwesomeIcon icon={faUserPlus} className="icon" />
              Invite
            </button>
          </div>
        </div>
        {/* Right Side Content */}
        <div className="header__column">
          <div className="header__iconWrapper">
            <FontAwesomeIcon
              icon={faSyncAlt}
              className="header__iconButton active"
            />
            <FontAwesomeIcon
              icon={faSatelliteDish}
              className="header__iconButton"
            />
            <FontAwesomeIcon icon={faWrench} className="header__iconButton" />
            <FontAwesomeIcon icon={faBell} className="header__iconButton" />
            <FontAwesomeIcon icon={faHeart} className="header__iconButton" />
            <FontAwesomeIcon
              icon={faMicrochip}
              className="header__iconButton"
            />
            <button className="header__button" id="header__upgradeButton">
              Upgrade
              <FontAwesomeIcon icon={faChevronDown} style={{ marginLeft: 5 }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
