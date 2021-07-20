/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import storeLogo from "../../assets/image3.png";
import homeBG from "../../assets/image2.png";
import sampleThumbnail from "../../assets/RedStore/images/user-2.png";
import axios from "axios";
import "./home.css";

const Home = () => {
  const [data, setData] = useState();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/dorayaki")
      .then((res) => {
        setData(res.data);
        setisLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Layout>
        <div className="home-container">
          <div className="homepage">
            <div className="navbar">
              <div className="logo-home">
                <img className="logo-store" src={storeLogo} />
              </div>
            </div>
            <div className="row">
              <div className="col-2">
                <h1>
                  Give Your Belly <br /> A Plenty of Dorayaki!
                </h1>
                <p>asdfasdfasdf asdfasdfa .asdf asdfasd asdf asd fasdf.</p>
                <a href="#section2" className="btn">
                  Explore now &#8594;
                </a>
              </div>
              <div className="col-2">
                <img className="home-background" src={homeBG} />
              </div>
            </div>
          </div>
        </div>
        <div className="categories">
          <div className="column-latest" id="section2">
            {!isLoading &&
              data.map((obj, i) => (
                <div className="column-latest-card" key={obj.ID}>
                  <div
                    className="column-latest-thumbnail"
                    src={sampleThumbnail}
                  >
                    <img src={sampleThumbnail} />
                  </div>
                  <div className="column-latest-rasa"> {obj.Rasa}</div>
                  <div className="column-latest-deskripsi">{obj.Deskripsi}</div>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Home;
