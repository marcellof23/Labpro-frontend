/* eslint-disable react/prop-types */
import React from "react";
import Header from "../../components/Layout/Header";
import "./layout.css";
const Layout = (props) => {
  return (
    <>
      <div className="container">
        <div className="main-content">
          <Header />
          {props.children}
        </div>
        <footer></footer>
      </div>
    </>
  );
};

export default Layout;
