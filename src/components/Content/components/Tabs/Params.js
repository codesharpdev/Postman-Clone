import React from "react";

const Params = () => {
  return (
    <div className="content__requestOptionsContainer">
      <p className="content__smallText">Query Params</p>

      <div className="content__paramsTableRow">
        <div className="content__paramsTableColumn"></div>
        <div className="content__paramsTableColumn">KEY</div>
        <div className="content__paramsTableColumn">VALUE</div>
        <div className="content__paramsTableColumn">DESCRIPTION</div>
      </div>
      <div className="content__paramsTableRow">
        <div className="content__paramsTableColumn"></div>
        <div className="content__paramsTableColumn">
          <input
            type="text"
            className="content__tableInput"
            placeholder="Key"
          />
        </div>
        <div className="content__paramsTableColumn">
          <input
            type="text"
            className="content__tableInput"
            placeholder="Value"
          />
        </div>
        <div className="content__paramsTableColumn">
          <input
            type="text"
            className="content__tableInput"
            placeholder="Description"
          />
        </div>
      </div>
    </div>
  );
};
export default Params;
