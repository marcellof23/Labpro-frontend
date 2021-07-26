import React from "react";

import "./NotFound.css";

const NotFound = () => {
  const image = "http://i.giphy.com/l117HrgEinjIA.gif";
  return (
    <div className="NotFound">
      <div
        className="bg"
        style={{ backgroundImage: "url(" + image + ")" }}
      ></div>
      <div className="code">404</div>
    </div>
  );
};

export default NotFound;
