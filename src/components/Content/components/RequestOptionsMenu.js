import React from "react";

const RequestOptionsMenu = (props) => {
  const { tabs, tabIndex, handleTabChange } = props;
  return (
    <div>
      <div className="content__requestTabsMenuRow">
        <div className="content__requestTabsMenuColumn">
          <div className="content__requestOptionsMenuWrapper">
            {tabs.map((tab, index) => {
              return (
                <span
                  onClick={() => handleTabChange(index)}
                  className={
                    index === tabIndex
                      ? "content__requestOptionMenuItem active"
                      : "content__requestOptionMenuItem"
                  }
                >
                  {tab}
                </span>
              );
            })}
          </div>
        </div>
        <div
          className="content__requestTabsMenuColumn"
          id="content__rightContent"
        >
          <span className="content__orangeSmallText">Cookies</span>
          <span className="content__orangeSmallText">Code</span>
        </div>
      </div>
    </div>
  );
};
export default RequestOptionsMenu;
