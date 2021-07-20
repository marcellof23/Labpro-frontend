import React from "react";
import { Route } from "react-router-dom";

export default function PublicRoute({ ...routeProps }) {
  return <Route {...routeProps} />;
}
