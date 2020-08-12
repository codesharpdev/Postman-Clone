import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import ReactJson from "react-json-view";

const Response = (props) => {
  const { tab } = props;
  return (
    <div className="content__responseContainer">
      <div className="content__responeMenu">
        <div className="content__responseMenuRow">
          <div className="content__responseMenuColumn">
            <span className="content__responseMenuOption active">Body</span>
            <span className="content__responseMenuOption">Cookies</span>
            <span className="content__responseMenuOption">Headers</span>
            <span className="content__responseMenuOption">Test Results</span>
          </div>
          {tab.response.response !== undefined ||
          tab.response.status !== undefined ? (
            <div className="content__responseMenuColumn">
              <span className="content__responseMenuOption">
                <FontAwesomeIcon icon={faGlobe} className="mr-2" />
                Status :{" "}
                <span className="content__greenText">
                  {tab.response.status === "success"
                    ? "200 OK"
                    : tab.response.response.status}
                </span>
              </span>
              <span className="content__responseMenuOption">
                Time : <span className="content__greenText">2.3 ms</span>
              </span>
              <span className="content__responseMenuOption">
                Size : <span className="content__greenText">400 KB</span>
              </span>
              <span
                className="content__responseMenuOption"
                id="saveResponseButton"
              >
                Save Response <FontAwesomeIcon icon={faCaretDown} />
              </span>
            </div>
          ) : null}
        </div>
      </div>
      <br />
      <div className="content__JSONViewer">
        <ReactJson
          src={
            tab.response.data !== undefined || tab.response !== undefined
              ? tab.response.data
              : tab.response.response.data
          }
        />
      </div>
    </div>
  );
};
export default Response;
