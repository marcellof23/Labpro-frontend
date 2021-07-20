/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useMemo } from "react";

import { Link, useHistory } from "react-router-dom";

import routes from "./routes";

const LayoutHeader = () => {
  const history = useHistory();
  return (
    <div className="navItemWrapper">
      {routes.map((route, idx) => (
        <NavItem key={idx} {...route} />
      ))}
    </div>
  );
};

const NavItem = ({ name, to }) => {
  const history = useHistory();
  const isActive = useMemo(() => {
    if (history.location.pathname === to) {
      return true;
    }
    return false;
  }, [history.location.pathname]);

  return (
    <Link to={to}>
      <div className={`navItemContainer ${isActive ? "active" : ""}`}>
        <span>{name}</span>
      </div>
    </Link>
  );
};

export default LayoutHeader;
