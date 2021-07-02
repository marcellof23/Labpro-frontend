import React from "react";
import storeLogo from "../assets/image3.png";
import homeBG from "../assets/image2.png";
import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="homepage">
        <div className="navbar">
          <div className="logo-home">
            <img className="logo-store" src={storeLogo} />
          </div>
          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Products</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
              <li>
                <a href="">Account</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="row">
          <div className="col-2">
            <h1>
              Give Your Workout <br /> A New Style!
            </h1>
            <p>asdfasdfasdf asdfasdfa .asdf asdfasd asdf asd fasdf.</p>
            <button className="btn">Explore now &#8594; </button>
          </div>
          <div className="col-2">
            <img className="home-background" src={homeBG} />
          </div>
        </div>
      </div>
    </div>
  );
}
