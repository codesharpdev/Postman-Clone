import React from "react";
import Params from "./Tabs/Params";

const RequestOptions = (props) => {
  const { tabIndex } = props;
  const componentMappings = {
    0: Params,
    1: Params,
  };

  var Component = componentMappings[tabIndex];
  return (
    <div>
      <Component />
    </div>
  );
};
export default RequestOptions;
