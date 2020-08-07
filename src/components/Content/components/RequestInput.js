import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretRight,
  faComment,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";

const RequestInput = (props) => {
  const { tab } = props;
  if (tab !== undefined) {
    return (
      <div className="content__requestInputWrapper">
        <div className="content__requestDetailsRow">
          <div className="content__requestDetailsColumn">
            <FontAwesomeIcon icon={faCaretRight} />
            <span className="content__requestDetailsName">{tab.name}</span>
          </div>
          <div className="content__requestDetailsColumn">
            <FontAwesomeIcon icon={faComment} />
            <span className="content__requestDetailsName">
              Comments
              <span className="content__requestBadge">0</span>
            </span>
            <span className="content__requestDetailsName">
              Examples
              <span className="content__requestBadge">0</span>
            </span>
            <FontAwesomeIcon icon={faCaretDown} />
          </div>
        </div>
        {/* Input */}

        <div className="content__requestInputRow">
          <div className="content__requestInputColumn">
            <select>
              <option>GET</option>
              <option>POST</option>
            </select>
            <input type="text" placeholder="" />
            <button className="content__requestSendButton">
              Send
              <FontAwesomeIcon
                icon={faCaretDown}
                className="content__requestSendButtonIcon"
              />
            </button>
            <button className="content__requestSaveButton ">
              Save
              <FontAwesomeIcon
                icon={faCaretDown}
                className="content__requestSendButtonIcon"
              />
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};
export default RequestInput;
