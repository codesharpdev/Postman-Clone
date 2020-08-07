import axios from "axios";

export const sendRequest = (requestType, URL, body, headers) => {
  if (requestType === "GET") {
    var res = axios.get(URL, {}, {});
    return res;
  }
};
