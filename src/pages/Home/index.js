/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import storeLogo from "../../assets/image3.png";
import homeBG from "../../assets/image2.png";
import sampleThumbnail from "../../assets/RedStore/images/user-2.png";
import axios from "axios";
import "./home.css";

const HomePage = () => {
  const [data, setData] = useState();
  const [dataStore, setDataStore] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [isLoadingStore, setisLoadingStore] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:8080/dorayaki")
      .then((res) => {
        let dorayakiArr = res.data.filter(
          (dorayaki) => dorayaki.DorayakiStoreID !== null
        );
        setData(dorayakiArr);
        setisLoading(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/dorayaki-store")
      .then((res) => {
        setDataStore(res.data);
        setisLoadingStore(false);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const findStoreName = (id) => {
    if (dataStore.length) {
      const index = dataStore.findIndex((data) => data.ID == id);
      return index === -1 ? "" : dataStore[index].Nama;
    }
    return "";
  };

  console.log(findStoreName(3));

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
                <p>The biggest e-commerce dorayaki app on the entire world!</p>
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
        <div className="categories" id="section2">
          <div className="product-title">All products</div>
          <div className="column-latest">
            {!isLoading &&
              !isLoadingStore &&
              data.map((obj, i) => (
                <div className="column-latest-card" key={obj.ID}>
                  <img className="column-latest-img" src={sampleThumbnail} />
                  <div className="column-latest-1"> {obj.Rasa}</div>
                  <div className="column-latest-deskripsi">{obj.Deskripsi}</div>
                  <div className="column-latest-2">
                    {findStoreName(obj.DorayakiStoreID)}
                  </div>
                  <div className="column-latest-footer"></div>
                </div>
              ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;
